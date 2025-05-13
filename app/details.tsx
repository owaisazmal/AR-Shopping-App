// HighFidelityDetail.tsx
import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

import GoBack from "../assets/backArrow.svg";
import Heart from "../assets/Favorite.svg";
import StarIcon from "../assets/star.svg";
import Navbar from "./components/Navbar";
import products from "../assets/products";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("window");
const CONTENT_W = SCREEN_W * 0.9;
const BUTTON_H = 56;

export default function HighFidelityDetail() {
  const product = products[1];

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          {/* IMAGE + ICONS */}
          <View style={styles.imageBox}>
            <Image
              source={product.image}
              style={styles.image}
              resizeMode="cover"
            />
            <TouchableOpacity style={[styles.btn, styles.leftBtn]}>
              <GoBack width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.rightBtn]}>
              <Heart width={24} height={24} />
            </TouchableOpacity>
          </View>

          {/* DETAILS */}
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.title}>
                {product.name.toUpperCase()}
              </Text>
              <View style={styles.row}>
                <StarIcon width={18} height={18} />
                <Text style={styles.rating}>
                  {product.rating.toFixed(1)}
                </Text>
              </View>
            </View>

            <Text style={styles.desc}>
              {product.description}
            </Text>

            <Link href="/ar" style={styles.fullWidth}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TRY ON IN AR</Text>
              </View>
            </Link>
            <View style={styles.button}>
              <Text style={styles.buttonText}>VISIT PRODUCT</Text>
            </View>
          </View>

        </View>
      </ScrollView>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  scroll: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 80,
  },

  container: {
    width: CONTENT_W,
    minHeight: SCREEN_H * 0.8,
  },

  imageBox: {
    width: CONTENT_W,
    height: SCREEN_W*0.6,          // lock in a height
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#f9f9f9",
    marginBottom: 16,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",           // fill the wrapper
    resizeMode: "contain",    // scale down cleanly
  },

  btn: {
    position: "absolute",
    top: 16,
    padding: 8,
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  leftBtn: { left: 16 },
  rightBtn: { right: 16 },

  info: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "600", color: "#121111" },
  rating: { marginLeft: 6, fontSize: 16, color: "#121111" },

  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: "#787676",
    marginVertical: 16,
  },

  fullWidth: {
    width: "100%",
    alignSelf: "center",
    marginBottom: 12,
  },
  button: {
    width: "100%",
    height: BUTTON_H,
    backgroundColor: "#e0e0e0",
    borderRadius: BUTTON_H / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#000" },
});
