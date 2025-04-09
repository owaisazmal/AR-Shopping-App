import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";
import GoBack from "../assets/backArrow.svg"
import Sort from "../assets/sort.svg"
import Navbar from "./components/navbar";

const HighFidelityChekout = () => {
  	
  	return (
    		<View style={styles.highFidelityChekout}>
      			<View style={[styles.cartView, styles.cartViewPosition]}>
        				<View style={[styles.checkout, styles.detailFlexBox]}>
          					<View style={styles.back}>
            						<GoBack style={styles.mainIconLayout} />
          					</View>
          					<Text style={styles.savedItems}>SAVED ITEMS</Text>
          					<View style={styles.back}>
            						<Sort style={[styles.mainIcon1, styles.mainIconLayout]}/>
          					</View>
        				</View>
        				<View style={[styles.stripe, styles.stripeLayout]} />
        				<View style={[styles.cart2, styles.cartPosition]}>
          					<Image style={styles.productLayout} resizeMode="cover" source={require("../assets/image1.png")} />
          					<View style={styles.detailFlexBox}>
            						<View style={styles.detail1}>
              							<View style={styles.headline}>
                								<Text style={[styles.modernLightClothes, styles.textTypo]}>Modern light clothes</Text>
                								<Text style={styles.shirt}>Shirt</Text>
              							</View>
              							<Text style={[styles.text, styles.textTypo]}>$162.99</Text>
            						</View>
          					</View>
        				</View>
        				<View style={[styles.stripe1, styles.stripeLayout]} />
        				<View style={[styles.cart1, styles.cartPosition]}>
          					<View style={[styles.productCart, styles.productLayout]}>
            						<Image style={styles.productCartIcon1} resizeMode="cover" source={require("../assets/image2.png")} />
          					</View>
          					<View style={styles.detailFlexBox}>
            						<View style={styles.detail1}>
              							<View style={styles.headline}>
                								<Text style={[styles.modernLightClothes, styles.textTypo]}>Modern light clothes</Text>
                								<Text style={styles.shirt}>Dress</Text>
              							</View>
              							<Text style={[styles.text, styles.textTypo]}>$212.99</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.iphone, styles.iphonePosition]}>
        				<View style={[styles.homeIndicator, styles.cartViewPosition]} />
      			</View>
				<Navbar/>
    		</View>);
};

const styles = StyleSheet.create({
  	cartViewPosition: {
    		left: "50%",
    		position: "absolute"
  	},
  	detailFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	mainIconLayout: {
    		height: 24,
    		width: 24
  	},
  	stripeLayout: {
    		height: 1,
    		width: 328,
    		borderTopWidth: 1,
    		borderColor: "#f6f6f6",
    		left: 24,
    		borderStyle: "solid",
    		position: "absolute"
  	},
  	cartPosition: {
    		gap: 15,
    		left: 24,
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	textTypo: {
    		fontSize: 14,
    		textAlign: "left",
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600"
  	},
  	productLayout: {
    		height: 70,
    		width: 70,
    		borderRadius: 14,
    		overflow: "hidden"
  	},
  	iphonePosition: {
    		width: 375,
    		left: "50%",
    		position: "absolute"
  	},
  	back: {
    		borderRadius: 32,
    		borderColor: "#dfdede",
    		borderWidth: 1,
    		padding: 8,
    		borderStyle: "solid",
    		flexDirection: "row"
  	},
  	savedItems: {
    		fontSize: 16,
    		lineHeight: 22,
    		textAlign: "left",
    		color: "#121111",
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600"
  	},
  	mainIcon1: {
    		overflow: "hidden"
  	},
  	checkout: {
    		marginLeft: -188,
    		top: 68,
    		paddingHorizontal: 24,
    		paddingVertical: 16,
    		gap: 89,
    		width: 375,
    		left: "50%",
    		position: "absolute"
  	},
  	stripe: {
    		top: 376
  	},
  	modernLightClothes: {
    		color: "#121111"
  	},
  	shirt: {
    		fontSize: 10,
    		fontFamily: "EncodeSans-Regular",
    		color: "#787676",
    		textAlign: "left"
  	},
  	headline: {
    		gap: 4
  	},
  	text: {
    		color: "#292526"
  	},
  	detail1: {
    		gap: 16
  	},
  	cart2: {
    		top: 282
  	},
  	stripe1: {
    		top: 258
  	},
  	productCartIcon1: {
    		top: -9,
    		left: -13,
    		width: 95,
    		height: 118,
    		position: "absolute"
  	},
  	productCart: {
    		backgroundColor: "#fff"
  	},
  	cart1: {
    		top: 164
  	},
  	cartView: {
    		marginLeft: -186.5,
    		top: 0,
    		width: 374,
    		height: 377,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
  	homeIndicator: {
    		marginLeft: -66.5,
    		bottom: 8,
    		borderRadius: 100,
    		backgroundColor: "#101010",
    		width: 134,
    		height: 5
  	},
  	iphone: {
    		marginLeft: -187.5,
    		bottom: 0,
    		height: 59
  	},
  	highFidelityChekout: {
    		flex: 1,
    		width: "100%",
    		height: 812,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	}
});

export default HighFidelityChekout;
