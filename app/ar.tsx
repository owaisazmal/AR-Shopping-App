import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";

export default function WebARTryOn() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [showShirt, setShowShirt] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bodyDetected, setBodyDetected] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const netRef = useRef<posenet.PoseNet | null>(null);
  const detectionInterval = useRef<NodeJS.Timeout | null>(null);

  // Load TensorFlow.js and PoseNet model
  useEffect(() => {
    const loadModels = async () => {
      try {
        setDebugInfo("Loading TensorFlow.js...");
        await tf.ready();
        
        setDebugInfo("Loading PoseNet model...");
        netRef.current = await posenet.load({
          architecture: 'MobileNetV1',
          outputStride: 16,
          inputResolution: 257,
          multiplier: 0.75
        });
        
        setDebugInfo("Models loaded successfully");
        setLoading(false);
      } catch (error) {
        setDebugInfo(`Error loading models: ${error.message}`);
        console.error("Error loading models:", error);
        setLoading(false);
      }
    };

    loadModels();

    return () => {
      if (detectionInterval.current) {
        clearInterval(detectionInterval.current);
      }
      if (netRef.current) {
        netRef.current.dispose();
      }
    };
  }, []);

  // Start/stop webcam
  const toggleCamera = async () => {
    if (isCameraOn) {
      stopCamera();
    } else {
      await startCamera();
    }
  };

  const startCamera = async () => {
    try {
      setDebugInfo("Requesting camera access...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: "user",
          width: 640,
          height: 480
        },
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          setDebugInfo("Camera started, detecting body...");
          videoRef.current?.play();
          setIsCameraOn(true);
          startBodyDetection();
        };
      }
    } catch (err) {
      setDebugInfo(`Camera error: ${err.message}`);
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    if (detectionInterval.current) {
      clearInterval(detectionInterval.current);
      detectionInterval.current = null;
    }
    setIsCameraOn(false);
    setBodyDetected(false);
    setDebugInfo("Camera stopped");
  };

  // Body detection function
  const startBodyDetection = () => {
    if (!videoRef.current || !netRef.current) {
      setDebugInfo("Detection prerequisites not met");
      return;
    }

    detectionInterval.current = setInterval(async () => {
      try {
        const pose = await netRef.current!.estimateSinglePose(videoRef.current!, {
          flipHorizontal: true,
        });

        const minScore = 0.3; // Increase if too sensitive
        const isDetected = pose.score >= minScore;
        
        setBodyDetected(isDetected);
        setDebugInfo(
          isDetected 
            ? `Body detected! (confidence: ${(pose.score * 100).toFixed(0)}%)` 
            : `Searching... (confidence: ${(pose.score * 100).toFixed(0)}%)`
        );

      } catch (error) {
        console.error("Detection error:", error);
        setDebugInfo(`Detection error: ${error.message}`);
      }
    }, 500); // Check every 500ms
  };

  return (
    <View style={styles.container}>
      {/* Hidden video element */}
      <video
        ref={videoRef}
        style={{ display: 'none' }}
        playsInline
      />
      
      {/* Camera preview */}
      <View style={styles.cameraContainer}>
        {isCameraOn ? (
          <video
            autoPlay
            playsInline
            muted
            style={styles.cameraPreview}
            ref={ref => {
              if (ref && videoRef.current) {
                ref.srcObject = videoRef.current.srcObject;
              }
            }}
          />
        ) : (
          <View style={styles.cameraPlaceholder}>
            <Text>Camera is off</Text>
          </View>
        )}

        {/* Shirt overlay - positioned in center for now */}
        {showShirt && bodyDetected && (
          <View style={styles.shirtOverlay}>
            <Image
              source={require("../assets/tshirt-overlay.png")}
              style={styles.shirtImage}
            />
          </View>
        )}
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, loading ? styles.disabledButton : null]}
          onPress={toggleCamera}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, !isCameraOn || !bodyDetected ? styles.disabledButton : null]}
          onPress={() => setShowShirt(!showShirt)}
          disabled={!isCameraOn || !bodyDetected}
        >
          <Text style={styles.buttonText}>
            {showShirt ? "Remove Shirt" : "Try On Shirt"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Debug information */}
      <View style={styles.debugContainer}>
        <Text style={styles.debugText}>{debugInfo}</Text>
        {isCameraOn && !bodyDetected && (
          <>
            <Text style={styles.tipText}>Make sure:</Text>
            <Text style={styles.tipText}>1. You're well lit</Text>
            <Text style={styles.tipText}>2. Upper body is visible</Text>
            <Text style={styles.tipText}>3. Standing 1-2m from camera</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  cameraContainer: {
    width: '100%',
    maxWidth: 640,
    height: 480,
    backgroundColor: '#000',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
    borderRadius: 8,
  },
  cameraPreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cameraPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shirtOverlay: {
    position: 'absolute',
    width: '40%',
    aspectRatio: 2/3,
    top: '20%',
    left: '30%',
    zIndex: 10,
  },
  shirtImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  controls: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  debugContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    maxWidth: 640,
  },
  debugText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  tipText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
  },
});