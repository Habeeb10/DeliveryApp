import { StyleSheet } from "react-native";

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
    resizeMode: "contain",
  },
  cabbagebox: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    marginTop: 30,
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
    backgroundColor: "#F6F5F5",
  },
});

export const ItemStyles = StyleSheet.create({
  add: {
    marginLeft: 20,
    color: "white",
  },
  piecebox: {
    flexDirection: "row",
    alignItems: "center",
  },
  piecegr: {
    color: "#06BE77",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 25,
    marginLeft: 10,
    paddingHorizontal: 20,
  },
  label: {
    color: "#2D0C57",
    fontSize: 20,
    lineHeight: 20,
    marginLeft: 15,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 10,
    paddingHorizontal: 20,
  },

  cartvectorbox: {
    flexDirection: "row",
    paddingHorizontal: 20,
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
  country: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D0C57",
    marginBottom: 16,
    marginTop: 20,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  piece: {
    fontWeight: "500",
    color: "#9586A8",
    fontSize: 17,
  },
  price: {
    fontWeight: "700",
    color: "#2D0C57",
    fontSize: 32,
    marginLeft: 10,
    paddingHorizontal: 20,
  },

  topic: {
    color: "#9586A8",
    fontSize: 16,
    fontWeight: "400",
    height: 194,
    lineHeight: 26,
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
    // marginTop: 100,
  },
  container: {
    flex: 1,
  },
});
