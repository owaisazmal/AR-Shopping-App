import {Image, StyleSheet, Text, View} from "react-native";
import { Link } from "expo-router";
import Home from "../../assets/Home.svg"
import Cart from "../../assets/Cart.svg"
import Favorite from "../../assets/Favorite.svg"
import Account from "../../assets/Account.svg"

const Navbar = ()=>{
    return(
        <View style={[styles.bottomNavigation, styles.searchSpaceBlock]} >
            <Link href = "./home"><Home style={[styles.homeIcon, styles.iconLayout]} width={40} height={40} /></Link>
            <Link href = "./details"><Cart width={40} height={40} /></Link>
            <Link href = "./saved"><Favorite width={40} height={40} /></Link>
            <Link href = "./#"><Account width={40} height={40} /></Link>
        </View>
    )
}

const styles = StyleSheet.create({
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
    searchSpaceBlock: {
        paddingHorizontal: 16,
        flexDirection: "row"
    },
    homeIcon: {},
    iconLayout: {
        borderRadius: 100,
        overflow: "hidden"
    },

})


export default Navbar;