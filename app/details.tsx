import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";
import Heart from "../assets/Favorite.svg"
import Review from "../assets/star.svg"
import GoBack from "../assets/backArrow.svg"
import Navbar from "./components/Navbar";

const HighFidelityDetail = () => {
  	return (
    		<View style={styles.highFidelityDetail}>
      			<View style={[styles.imagePreview, styles.imagePreviewPosition]}>
        				<View style={styles.imagePreview1}>
          					<Image style={[styles.product2Icon, styles.imagePreviewPosition]} resizeMode="cover" source= {require("../assets/product2.jpg")} />
          					<View style={[styles.back, styles.backShadowBox]}>
            						<GoBack style={styles.iconLayout} />
          					</View>
          					<View style={[styles.heart, styles.backShadowBox]}>
            						<Heart style={styles.iconLayout} width={24} height={24} />
          					</View>
        				</View>
      			</View>
      			<View style={styles.detail}>
        				<View style={styles.detail1}>
          					<View style={styles.text}>
            						<View style={styles.text1}>
              							<Text style={styles.dress1}>DRESS 1</Text>
              							<Review style={styles.reviewIcon} width={18} height={18} />
            						</View>
          					</View>
          					<Text style={styles.description}>Dress from Gucci Limited edition Grailed</Text>
        				</View>
        				<View style={[styles.component1, styles.component1Layout]}>
          					<View style={styles.childShadowBox} />
          					<Text style={[styles.tryOnIn, styles.tryOnInTypo]}>TRY ON IN AR</Text>
        				</View>
        				<View style={[styles.rectangleParent, styles.component1Layout]}>
          					<View style={styles.childShadowBox} />
          					<Text style={[styles.visitProduct, styles.tryOnInTypo]}>VISIT PRODUCT</Text>
        				</View>
						<Navbar/>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	imagePreviewPosition: {
    		width: 375,
    		left: "50%",
    		top: 0,
    		marginLeft: -187.5,
    		position: "absolute"
  	},
  	backShadowBox: {
    		padding: 8,
    		borderRadius: 32,
    		shadowOpacity: 1,
    		elevation: 12,
    		shadowRadius: 12,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(41, 37, 38, 0.1)",
    		top: 16,
    		flexDirection: "row",
    		backgroundColor: "#fdfdfd",
    		position: "absolute"
  	},
  	component1Layout: {
    		height: 58,
    		width: 327,
    		left: 24,
    		position: "absolute"
  	},
  	tryOnInTypo: {
    		color: "#000",
    		lineHeight: 42,
    		fontSize: 28,
    		top: "13.79%",
    		textAlign: "left",
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	product2Icon: {
    		height: 439
  	},
  	iconLayout: {},
  	back: {
    		left: 16
  	},
  	heart: {
    		right: 16,
    		overflow: "hidden"
  	},
  	imagePreview1: {
    		top: 68,
    		borderRadius: 16,
    		height: 392,
    		width: 327,
    		left: 24,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	imagePreview: {
    		height: 424,
    		overflow: "hidden"
  	},
  	dress1: {
    		fontSize: 24,
    		lineHeight: 31,
    		color: "#121111",
    		width: 195,
    		height: 32,
    		textAlign: "left",
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600"
  	},
  	reviewIcon: {},
  	text1: {
    		justifyContent: "center",
    		gap: 4
  	},
  	text: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	description: {
    		fontSize: 12,
    		lineHeight: 18,
    		fontFamily: "EncodeSans-Regular",
    		color: "#787676",
    		textAlign: "left"
  	},
  	detail1: {
    		top: 24,
    		gap: 16,
    		left: 24,
    		position: "absolute"
  	},
  	childShadowBox: {
    		opacity: 0.7,
    		borderWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		backgroundColor: "#d9d9d9",
    		borderRadius: 20,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		top: "0%",
    		height: "100%",
    		shadowOpacity: 1,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		position: "absolute",
    		width: "100%"
  	},
  	tryOnIn: {
    		left: "21.71%"
  	},
  	component1: {
    		top: 266
  	},
  	visitProduct: {
    		left: "18.04%"
  	},
  	rectangleParent: {
    		top: 176
  	},
  	detail: {
    		bottom: 36,
    		height: 352,
    		backgroundColor: "#fdfdfd",
    		width: 375,
    		left: "50%",
    		marginLeft: -187.5,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	highFidelityDetail: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 812,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default HighFidelityDetail;
