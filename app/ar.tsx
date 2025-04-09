import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Ellipse1 from "../assets/Ellipse.svg"

const Checkout = () => {
  	
  	return (
    		<View style={[styles.checkout, styles.checkoutBg]}>
      			<View style={[styles.bottomButton, styles.bottomButtonPosition]}>

      			</View>
      			<View style={[styles.checkoutChild, styles.childBg]} />
      			<View style={styles.rectangleParent}>
        				<View style={[styles.componentChild, styles.childBg]} />
        				<Text style={styles.resetModel}>RESET MODEL</Text>
      			</View>
      			<Ellipse1 style={styles.checkoutItem} width={100} height={100} />
    		</View>);
};

const styles = StyleSheet.create({
  	checkoutBg: {
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
  	bottomButtonPosition: {
    		width: 375,
    		bottom: 0,
    		marginLeft: -187.5,
    		left: "50%",
    		position: "absolute"
  	},
  	childBg: {
    		backgroundColor: "#d9d9d9",
    		borderRadius: 32,
    		position: "absolute"
  	},
  	homeIndicator1: {
    		marginLeft: -66.5,
    		bottom: 8,
    		borderRadius: 100,
    		backgroundColor: "#000",
    		width: 134,
    		height: 5,
    		left: "50%",
    		position: "absolute"
  	},
  	homeIndicator: {
    		height: 34
  	},
  	bottomButton: {
    		borderStyle: "solid",
    		borderColor: "#e6e6e6",
    		borderTopWidth: 0.5,
    		height: 98,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
  	checkoutChild: {
    		top: 100,
    		width: 321,
    		height: 561,
    		left: 27
  	},
  	componentChild: {
    		height: "100%",
    		top: "0%",
    		right: "0%",
    		bottom: "0%",
    		left: "0%",
    		width: "100%"
  	},
  	resetModel: {
    		top: 12,
    		left: 32,
    		fontSize: 16,
    		lineHeight: 24,
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		color: "#000",
    		textAlign: "left",
    		position: "absolute"
  	},
  	rectangleParent: {
    		top: 44,
    		width: 177,
    		height: 48,
    		left: 27,
    		position: "absolute"
  	},
  	checkoutItem: {
    		top: 678,
    		left: 138,
    		position: "absolute"
  	},
  	checkout: {
    		flex: 1,
    		height: 812,
    		width: "100%"
  	}
});

export default Checkout;
