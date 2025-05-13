import * as React from "react";
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Jeans from "../assets/Jeans.svg"
import Dress from "../assets/dress.svg"
import Tshirt from "../assets/tshirt.svg"
import AllItems from "../assets/allItems.svg"

import Filter from "../assets/Filter.svg"
import Search from "../assets/Search.svg"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList";

const HighFidelityHome = () => {
  	return (
    		<View style={styles.highFidelityHome}>
				<View style={styles.profileContainer}>
						<View style={styles.profileTextContainer}>
							<Text style={styles.profileGreeting}>Hello, Welcome 👋</Text>
							<Text style={styles.profileName}>Albert Stevano</Text>
						</View>
						<Image style={styles.profileImg} source={require('../assets/profile.png')} resizeMode="cover"/>
				</View>
						<View style={styles.container}>
						<View style={styles.searchBox}>
							<Search />
							<Text style={styles.placeholder}>Search Products…</Text>
						</View>

						<TouchableOpacity style={styles.filterButton}>
							<Filter />
						</TouchableOpacity>
				</View>
				<View style={styles.filterContainer}>
					<View style={[styles.tab, styles.activeTab]}>
						<AllItems width={16} height={16} fill="#fff" />
						<Text style={[styles.tabText, styles.activeText]}>All Items</Text>
					</View>

					<View style={styles.tab}>
						<Dress width={16} height={16} fill="#000" />
						<Text style={styles.tabText}>Dress</Text>
					</View>

					<View style={styles.tab}>
						<Tshirt width={16} height={16} fill="#000" />
						<Text style={styles.tabText}>T-Shirt</Text>
					</View>

					<View style={styles.tab}>
						<Jeans width={16} height={16} fill="#000" />
						<Text style={styles.tabText}>Jeans</Text>
					</View>

				</View>
				<ProductList/>
				<Navbar/>
    		</View>
			);
};

const styles = StyleSheet.create({
	profileContainer: {
		// make it full-width so justifyContent works
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',         // vertically center text + image
		justifyContent: 'center',     // horizontally center the whole block
		paddingVertical: 16,
		paddingHorizontal: 12,
	},

	profileTextContainer: {
		marginRight: 12,
		alignItems: 'flex-end',       // so the text lines up against the avatar
	},

	profileGreeting: {
		fontSize: 14,
		color: '#555',
		marginBottom: 4,
	},

	profileName: {
		fontSize: 20,
		fontWeight: '700',
		color: '#000',
	},

	profileImg: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		// if you want a border:
		// borderWidth: 1,
		// borderColor: '#ddd',
	},

	container: {
		width: '90%',               // or '100%' if you want edge-to-edge
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 12,
  	},

	searchBox: {
		flex: 1,                    // takes all space minus filter button
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#ccc',
		paddingHorizontal: 12,
		height: 40,
		marginRight: 12,
	},

	placeholder: {
		marginLeft: 8,
		color: '#999',
		fontSize: 14,
	},

	filterButton: {
		width: 40,
		height: 40,
		backgroundColor: '#333',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},



	filterContainer: {
		flexDirection: 'row',            // lay out tabs in a row
		justifyContent: 'space-between', // evenly space them
		alignItems: 'center',
		width: '90%',                    // span 90% of screen
		alignSelf: 'center',             // center the group
		marginVertical: 16,
	},
	tab: {
		flex: 1,                         // equal width
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		marginHorizontal: 4,             // gap between tabs
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 8,
	},
	activeTab: {
		backgroundColor: '#000',
		borderColor: '#000',
	},
	tabText: {
		marginLeft: 6,                   // space between icon & text
		fontSize: 14,
		color: '#000',
	},
	activeText: {
		color: '#fff',
	},
	highFidelityHome: {

    		width: "100%",
    		height: "100%",
    		backgroundColor: "#fff"
  	}


});

export default HighFidelityHome;
