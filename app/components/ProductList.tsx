import {Image, StyleSheet, Text, View, ScrollView} from "react-native";
import products from "../../assets/products"
import Star from "../../assets/star.svg"

//creates the product undown type script highlight of P
const Product = ({ p}) => (
  <View style={styles.card}>
    <Image source={p.image} style={styles.image} />

    <View style={styles.textContainer}>
      <Text style={styles.name}>{p.name}</Text>
      <Text style={styles.type}>{p.type}</Text>
    </View>

    <View style={styles.footer}>
      <Text style={styles.price}>${p.price.toFixed(2)}</Text>
      <View style={styles.rating}>
        <Star width={18} height={18} />
        <Text style={styles.ratingText}>{p.rating.toFixed(1)}</Text>
      </View>
    </View>
  </View>
);


//creates list of products
const ProductList = () => {
	return(
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {products.map((p) => (
          <Product key={p.id} p={p} />
        ))}
      </View>
    </ScrollView>
	)
;} 
const styles = StyleSheet.create({
  card: {
    width: 130,
    margin: 8,
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  type: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
  },

  container: {
    gap: 0,
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    position: "absolute", 
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "flex-start",
	  width: "100%",
    marginBottom: 16,
  },
});

export default ProductList;