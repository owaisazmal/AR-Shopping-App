
import {Image, StyleSheet, Text, View, ScrollView} from "react-native";
import Star from "../../assets/star.svg"
 
 const Product = ()=> {
    return(
    <View>
        <View style={styles.product4}>
                <Image style={[styles.imageIcon, styles.imageIconLayout]} width={155} height={251} source={require("../../assets/image3.png")} />
                <View style={styles.text}>
                    <View style={styles.text1}>
                            <Text style={[styles.lightDressYellow, styles.albertStevanoClr]}>Light Dress Yellow</Text>
                            <Text style={[styles.dressModern, styles.dressModernTypo]}>Dress Modern</Text>
                    </View>
                    <View style={[styles.price, styles.priceFlexBox]}>
                            <Text style={[styles.text2, styles.text2Typo]}>$122.99</Text>
                            <View style={[styles.review, styles.priceFlexBox]}>
                                <Star style={styles.defaultIcon} width={18} height={18}/>
                                <Text style={[styles.text3, styles.text3Typo]}>5.0</Text>
                            </View>
                    </View>
                </View>
        </View>
        <View style={styles.product3} >
                <Image  style={[styles.imageIcon1, styles.imageIconLayout]} width={155} height={217} source={require("../../assets/image2.png")} />
                <View style={styles.text}>
                    <View style={styles.text1}>
                            <Text style={[styles.lightDressYellow, styles.albertStevanoClr]}>Maroon Dark Top</Text>
                            <Text style={[styles.dressModern, styles.dressModernTypo]}>Dress</Text>
                    </View>
                    <View style={[styles.price, styles.priceFlexBox]}>
                            <Text style={[styles.text2, styles.text2Typo]}>$194.99</Text>
                            <View style={[styles.review, styles.priceFlexBox]}>
                                <Star style={styles.defaultIcon} width={18} height={18} />
                                <Text style={[styles.text3, styles.text3Typo]}>5.0</Text>
                            </View>
                    </View>
                </View>
        </View>
        <View style={styles.shadow} />
        <View style={[styles.product2, styles.productPosition]} >
                <Image width={155} height={251} source={require("../../assets/image1.png")} />
                <View style={styles.text}>
                    <View style={styles.text1}>
                            <Text style={[styles.lightDressYellow, styles.albertStevanoClr]}>Light Dress Bless</Text>
                            <Text style={[styles.dressModern, styles.dressModernTypo]}>Dress modern</Text>
                    </View>
                    <View style={[styles.price, styles.priceFlexBox]}>
                            <Text style={[styles.text2, styles.text2Typo]}>$162.99</Text>
                            <View style={[styles.review, styles.priceFlexBox]}>
                                <Star style={styles.defaultIcon} width={18} height={18} />
                                <Text style={[styles.text3, styles.text3Typo]}>5.0</Text>
                            </View>
                    </View>
                </View>
        </View>
        <View style={[styles.product1, styles.productPosition]} >
                <Image  source = {require("../../assets/image4.png")} width={155} height={217} />
                <View style={styles.text}>
                    <View style={styles.text1}>
                            <Text style={[styles.lightDressYellow, styles.albertStevanoClr]}>Modern Light Clothes</Text>
                            <Text style={[styles.dressModern, styles.dressModernTypo]}>T-Shirt</Text>
                    </View>
                    <View style={[styles.price, styles.priceFlexBox]}>
                            <Text style={[styles.text2, styles.text2Typo]}>$212.99</Text>
                            <View style={[styles.review, styles.priceFlexBox]}>
                                <Star style={styles.defaultIcon} width={18} height={18} />
                                <Text style={[styles.text3, styles.text3Typo]}>5.0</Text>
                            </View>
                    </View>
                </View>
        </View>
    </View>
    )
 }

 const styles = StyleSheet.create({
  	imageIconLayout: {
    		width: 155,
    		borderRadius: 16,
    		overflow: "hidden"
  	},
  	albertStevanoClr: {
    		color: "#121111",
    		textAlign: "left"
  	},
  	dressModernTypo: {
    		fontFamily: "EncodeSans-Regular",
    		textAlign: "left"
  	},
  	priceFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	text2Typo: {
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600",
    		lineHeight: 21,
    		fontSize: 14
  	},
  	text3Typo: {
    		lineHeight: 18,
    		fontSize: 12,
    		fontFamily: "EncodeSans-Regular",
    		textAlign: "left"
  	},
  	productPosition: {
    		top: 268,
    		gap: 8,
    		position: "absolute"
  	},
  	categoryPosition: {
    		gap: 16,
    		left: 24,
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	dress1SpaceBlock: {
    		paddingVertical: 8,
    		paddingHorizontal: 12,
    		flexDirection: "row",
    		gap: 4
  	},
  	dress2Typo: {
    		fontFamily: "EncodeSans-Medium",
    		fontWeight: "500",
    		lineHeight: 18,
    		fontSize: 12,
    		textAlign: "left"
  	},
  	dress1Border: {
    		borderWidth: 1,
    		borderColor: "#dfdede",
    		borderStyle: "solid",
    		borderRadius: 8,
    		alignItems: "center"
  	},
  	searchSpaceBlock: {
    		paddingHorizontal: 16,
    		flexDirection: "row"
  	},
  	filterLayout: {
    		borderRadius: 8,
    		backgroundColor: "#292526",
    		alignItems: "center"
  	},
  	iconLayout: {
    		borderRadius: 100,
    		overflow: "hidden"
  	},
  	imageIcon: {},
  	lightDressYellow: {
    		textAlign: "left",
    		fontFamily: "EncodeSans-SemiBold",
    		fontWeight: "600",
    		lineHeight: 21,
    		fontSize: 14
  	},
  	dressModern: {
    		fontSize: 10,
    		lineHeight: 15,
    		color: "#787676"
  	},
  	text1: {
    		gap: 4
  	},
  	text2: {
    		color: "#292526",
    		textAlign: "left"
  	},
  	defaultIcon: {
    		overflow: "hidden"
  	},
  	text3: {
    		color: "#292526"
  	},
  	review: {
    		gap: 4
  	},
  	price: {
    		gap: 24
  	},
  	text: {
    		gap: 12
  	},
  	product4: {
    		top: 624,
    		gap: 8,
    		left: 196,
    		position: "absolute"
  	},
  	imageIcon1: {},
  	product3: {
    		top: 590,
    		left: 24,
    		gap: 8,
    		position: "absolute"
  	},
  	shadow: {
    		top: 687,
    		height: 66,
    		width: 327,
    		left: 24,
			flex:1,
    		position: "absolute",
    		backgroundColor: "#FFFFF000" // issues with transparency 
  	},
  	product2: {
    		left: 196
  	},
  	product1: {
    		left: 24
  	},
  	defaultIcon4: {},
  	allItems1: {
    		color: "#fdfdfd"
  	},
  	allItems: {
    		backgroundColor: "#292526",
    		borderRadius: 8,
    		alignItems: "center"
  	},
  	dress2: {
    		color: "#292526"
  	},
  	dress1: {
    		paddingVertical: 8,
    		paddingHorizontal: 12,
    		flexDirection: "row",
    		gap: 4
  	},
  	category: {
    		top: 210,
    		width: 327,
    		overflow: "hidden"
  	},
  	mainIcon: {},
  	searchClothes: {
    		color: "#cac9c9",
    		width: 105,
    		height: 20,
    		lineHeight: 21,
    		fontSize: 14,
    		fontFamily: "EncodeSans-Regular"
  	},
  	search: {
    		width: 263,
    		paddingVertical: 14,
    		borderWidth: 1,
    		borderColor: "#dfdede",
    		borderStyle: "solid",
    		borderRadius: 8,
    		alignItems: "center",
    		gap: 8
  	},
  	filterIcon: {
    		overflow: "hidden"
  	},
  	filter: {
    		justifyContent: "center",
    		padding: 12,
    		backgroundColor: "#292526",
    		flexDirection: "row",
    		borderRadius: 8
  	},
  	searchBar: {
    		top: 130
  	},
  	helloWelcome: {
    		color: "#787676"
  	},
  	albertStevano: {
    		fontSize: 16,
    		lineHeight: 24,
    		fontWeight: "700",
    		fontFamily: "EncodeSans-Bold",
    		textAlign: "left"
  	},
  	profileIcon: {
    		width: 32,
    		height: 32
  	},
  	customer: {
    		top: 68,
    		gap: 180,
    		left: 24,
    		position: "absolute"
  	},
  	homeIcon: {},
  	bottomNavigation: {
    		marginLeft: -163.5,
    		bottom: 32,
    		left: "50%",
    		borderRadius: 44,
    		paddingVertical: 10,
    		gap: 45,
    		backgroundColor: "#292526",
    		position: "absolute"
  	},
  	highFidelityHome: {
    		flex: 1,
    		width: "100%",
    		height: 812,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	}
});

export default Product;