import { StyleSheet } from "react-native";

export const CategoriesStyles = StyleSheet.create({
  bevbox: {
    flexDirection: "row",
    height: 65,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  searchbox: {
    flexDirection: "row",
    marginTop: 30,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F6F5F5",
  },
});

export const VegetableStyles = StyleSheet.create({
  headbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 25,
  },
  flower: {
    height: 160,
    width: 230,
    // marginLeft:10,
    resizeMode: "contain",
  },
  cabbagebox: {
    flexDirection: "row",
    height: 65,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
    flexWrap: "wrap",
    paddingHorizontal: 15,
  },
  bostonbox: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  searchbox: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "#F6F5F5",
  },
});

export const ItemStyles = StyleSheet.create({
  cartvectorbox: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  cartbox: {
    width: "85%",
    height: 60,
    backgroundColor: "#0BCE83",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 30,
  },
  vectorbox: {
    width: 100,
    height: 60,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D9D0E3",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  lettucebox: {
    paddingHorizontal: 30,
  },
  country: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D0C57",
    marginTop: 20,
  },
  piece: {
    fontWeight: "500",
    color: "#06BE77",
    fontSize: 17,
  },
  pieceingram: {
    marginLeft: 5,
    fontWeight: "500",
    color: "#06BE77",
    fontSize: 17,
  },
  price: {
    fontWeight: "700",
    color: "#2D0C57",
    fontSize: 32,
  },
  priceineuro: {
    marginLeft: 10,
    fontWeight: "400",
    color: "#9586A8",
    fontSize: 24,
  },
  topic: {
    color: "#9586A8",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 20,
    height: 194,
    lineHeight: 26,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    marginTop: 20,
    color: "#2D0C57",
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 36,
  },
  image: {
    height: 265,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
});

export const CheckoutStyles = StyleSheet.create({
  contact: {
    fontWeight: "700",
    color: "#2D0C57",
    fontSize: 22,
    lineHeight: 22,
  },
  switchbox: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  dronebox: {
    flexDirection: "row",
    paddingHorizontal: 25,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  drone: {
    marginRight: 170,
    color: "#7203FF",
    fontWeight: "600",
    fontSize: 17,
  },
  address: {
    marginLeft: 26,
    width: 128,
    lineHeight: 25,
    fontSize: 17,
    color: "#9586A8",
    fontWeight: "400",
  },
  homebox: {
    paddingHorizontal: 25,
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
  heading: {
    marginLeft: 26,
    color: "#9586A8",
    fontWeight: "600",
    fontSize: 17,
  },
  courierbox: {
    flexDirection: "row",
    paddingHorizontal: 25,
    marginTop: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  cardbox: {
    flexDirection: "row",
    paddingHorizontal: 25,
    marginTop: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  checkout: {
    fontWeight: "600",
    fontSize: 17,
    marginLeft: 130,
    color: "#2D0C57",
    marginTop: 50,
  },
  headbox: {
    flexDirection: "row",
    paddingHorizontal: 25,
    alignItems: "center",
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
  },
});

export const PaymentStyles = StyleSheet.create({
  usebox: {
    width: "90%",
    height: 60,
    backgroundColor: "#0BCE83",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
  },
  expirybox: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "400",
    height: 48,
    width: 165,
  },
  card: {
    width: 374,
    height: 250,
    resizeMode: "cover",
    marginLeft: 5,
    // marginTop:10
  },
  credit: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 41,
    color: "#2D0C57",
    // marginTop:10,
    paddingHorizontal: 25,
  },
  headbox: {
    flexDirection: "row",
    paddingHorizontal: 25,
    alignItems: "center",
    width: "100%",
    height: 90,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
  },
});
