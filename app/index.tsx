import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Link, Stack } from 'expo-router'; 
//need to use to link when sign on func implemented
import GoogleIcon from "../assets/Google.svg"

const SignIn = () => {
  	
  	return (
    		<View style={styles.signIn}>
      			<View style={styles.content}>
        				<View style={styles.copy}>
          					<Text style={[styles.createAnAccount, styles.arAppTypo]}>Create an account</Text>
          					<Text style={styles.enterYourEmail}>Enter your email to sign up for this app</Text>
        				</View>
        				<View style={styles.inputButton}>
          					<View style={styles.field}>
            						<Text style={styles.label} numberOfLines={1}>email@domain.com</Text>
          					</View>
          					<View style={styles.button}>
            						<Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          					</View>
        				</View>
        				<View style={styles.divider}>
          					<View style={styles.divider1} />
          					<Text style={styles.or}>or</Text>
          					<View style={styles.divider1} />
        				</View>
        				<View style={styles.buttons}>
          					<View style={[styles.button1, styles.buttonLayout]}>
            						<View style={[styles.label1, styles.labelPosition]}>
              							<GoogleIcon style={[styles.logoIcon, styles.logoIconLayout]} width={20} height={20} />
              							<Link href = "/(tabs)/home"><Text style={[styles.continueWithGoogle, styles.continueTypo]}>Continue with Google</Text></Link>
            						</View>
          					</View>
          					<View style={[styles.button2, styles.buttonLayout]}>
            						<View style={[styles.label2, styles.labelPosition]}>
              							<Image style={styles.logoIconLayout} resizeMode="cover" source={require("../assets/Apple.png")}/>
              							<Link href = "/(tabs)/home"> <Text style={[styles.continueWithGoogle, styles.continueTypo]}>Continue with Apple</Text></Link>
            						</View>
          					</View>
        				</View>
        				<Text style={styles.byClickingContinueContainer}>
          					<Text style={styles.byClickingContinue}>{`By clicking continue, you agree to our `}</Text>
          					<Text style={styles.termsOfService}>Terms of Service</Text>
          					<Text style={styles.byClickingContinue}>{` and `}</Text>
          					<Text style={styles.termsOfService}>Privacy Policy</Text>
        				</Text>
      			</View>
      			<Text style={[styles.arApp, styles.arAppTypo]}>AR app</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	arAppTypo: {
    		textAlign: "center",
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		color: "#000"
  	},
  	continueTypo: {
    		fontFamily: "Inter-Medium",
    		fontWeight: "500",
    		textAlign: "left",
    		lineHeight: 20,
    		fontSize: 14
  	},
  	buttonLayout: {
    		backgroundColor: "#eee",
    		left: 0,
    		height: 40,
    		borderRadius: 8,
    		width: 327,
    		position: "absolute"
  	},
  	labelPosition: {
    		marginTop: -10,
    		gap: 8,
    		flexDirection: "row",
    		alignItems: "center",
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	logoIconLayout: {
    		height: 20,
    		width: 20
  	},
  	createAnAccount: {
    		fontSize: 16,
    		lineHeight: 24
  	},
  	enterYourEmail: {
    		lineHeight: 21,
    		fontFamily: "Inter-Regular",
    		fontSize: 14,
    		textAlign: "center",
    		color: "#000"
  	},
  	copy: {
    		gap: 2,
    		alignItems: "center"
  	},
  	label: {
    		textAlign: "left",
    		color: "#828282",
    		lineHeight: 20,
    		fontFamily: "Inter-Regular",
    		fontSize: 14,
    		overflow: "hidden",
    		flex: 1
  	},
  	field: {
    		borderStyle: "solid",
    		borderColor: "#e0e0e0",
    		borderWidth: 1,
    		paddingVertical: 8,
    		paddingHorizontal: 16,
    		flexDirection: "row",
    		height: 40,
    		borderRadius: 8,
    		alignSelf: "stretch",
    		alignItems: "center",
    		backgroundColor: "#fff"
  	},
  	continue: {
    		color: "#fff"
  	},
  	button: {
    		backgroundColor: "#000",
    		justifyContent: "center",
    		paddingHorizontal: 16,
    		flexDirection: "row",
    		height: 40,
    		borderRadius: 8,
    		alignSelf: "stretch",
    		paddingVertical: 0,
    		alignItems: "center"
  	},
  	inputButton: {
    		gap: 16,
    		width: 327
  	},
  	divider1: {
    		backgroundColor: "#e6e6e6",
    		height: 1,
    		flex: 1
  	},
  	or: {
    		color: "#828282",
    		lineHeight: 20,
    		fontFamily: "Inter-Regular",
    		fontSize: 14,
    		textAlign: "center"
  	},
  	divider: {
    		gap: 8,
    		justifyContent: "center",
    		flexDirection: "row",
    		width: 327,
    		alignItems: "center"
  	},
  	logoIcon: {
    		overflow: "hidden"
  	},
  	continueWithGoogle: {
    		color: "#000"
  	},
  	label1: {
    		marginLeft: -86
  	},
  	button1: {
    		top: 0
  	},
  	label2: {
    		marginLeft: -81.5
  	},
  	button2: {
    		top: 48
  	},
  	buttons: {
    		height: 88,
    		width: 327
  	},
  	byClickingContinue: {
    		color: "#828282"
  	},
  	termsOfService: {
    		color: "#000"
  	},
  	byClickingContinueContainer: {
    		fontSize: 12,
    		lineHeight: 18,
    		alignSelf: "stretch",
    		fontFamily: "Inter-Regular",
    		textAlign: "center"
  	},
  	content: {
    		marginTop: -188.5,
    		marginLeft: -187.5,
    		paddingHorizontal: 24,
    		gap: 24,
    		paddingVertical: 0,
    		top: "50%",
    		alignItems: "center",
    		left: "50%",
    		position: "absolute"
  	},
  	arApp: {
    		marginLeft: -41.5,
    		top: 108,
    		fontSize: 24,
    		letterSpacing: -0.2,
    		lineHeight: 36,
    		left: "50%",
    		position: "absolute",
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600"
  	},
  	signIn: {
    		width: "100%",
    		height: 812,
    		overflow: "hidden",
    		flex: 1,
    		backgroundColor: "#fff"
  	}
});

export default SignIn;
