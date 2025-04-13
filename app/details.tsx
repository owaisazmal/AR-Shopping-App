import * as React from "react";
import {Image, StyleSheet, View, Text, ScrollView} from "react-native";
import { Link } from 'expo-router';
import Heart from "../assets/Favorite.svg"
import Review from "../assets/star.svg"
import GoBack from "../assets/backArrow.svg"
import Navbar from "./components/Navbar";

const HighFidelityDetail = () => {
  	return (
    		<View style={styles.highFidelityDetail}>
      			<ScrollView contentContainerStyle={styles.scrollContent} contentOffset={{ x: 0, y: 0 }}>
        			<View style={styles.imagePreview}>
          				<Image style={styles.product2Icon} resizeMode="cover" source={require("../assets/product2.jpg")} />
          				<View style={[styles.back, styles.backShadowBox]}>
            					<GoBack style={styles.iconLayout} />
          				</View>
          				<View style={[styles.heart, styles.backShadowBox]}>
            					<Heart style={styles.iconLayout} width={24} height={24} />
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
          				<Link href="/ar">
            				<View style={[styles.component1, styles.component1Layout]}>
              					<View style={styles.childShadowBox} />
              					<Text style={[styles.tryOnIn, styles.tryOnInTypo]}>TRY ON IN AR</Text>
            				</View>
          				</Link>
          				<View style={[styles.rectangleParent, styles.component1Layout]}>
            				<View style={styles.childShadowBox} />
            				<Text style={[styles.visitProduct, styles.tryOnInTypo]}>VISIT PRODUCT</Text>
            			</View>
        			</View>
      			</ScrollView>
      			<Navbar/>
    		</View>);
};

const styles = StyleSheet.create({
  	scrollContent: {
    		flexGrow: 1,
    		paddingTop: 20,
  	},
  	imagePreviewPosition: {
    		width: '100%',
    		position: 'relative',
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
    		marginHorizontal: 24,
    		marginTop: 16,
  	},
  	tryOnInTypo: {
    		color: "#000",
    		lineHeight: 42,
    		fontSize: 28,
    		textAlign: "left",
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600",
  	},
  	product2Icon: {
    		width: '100%',
    		height: 439,
  	},
  	iconLayout: {},
  	back: {
    		left: 16
  	},
  	heart: {
    		right: 16,
    		overflow: "hidden"
  	},
  	imagePreview: {
    		borderRadius: 16,
    		overflow: "hidden",
    		position: 'relative',
  	},
  	dress1: {
    		fontSize: 24,
    		lineHeight: 31,
    		color: "#121111",
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
    		marginTop: 24,
    		gap: 16,
    		marginHorizontal: 24,
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
    		position: "absolute",
    		left: "21.71%",
    		top: "13.79%"
  	},
  	component1: {
    		marginTop: 266
  	},
  	visitProduct: {
    		position: "absolute",
    		left: "18.04%",
    		top: "13.79%"
  	},
  	rectangleParent: {
    		marginTop: 176
  	},
  	detail: {
    		backgroundColor: "#fdfdfd",
    		width: "100%",
    		paddingBottom: 36,
  	},
  	highFidelityDetail: {
    		backgroundColor: "#fff",
    		flex: 1,
  	}
});

export default HighFidelityDetail;
