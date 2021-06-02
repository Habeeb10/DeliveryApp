import { StyleSheet } from "react-native";
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

  card: {
    width: 374,
    height: 250,
    resizeMode: "cover",
    marginLeft: 5,
  },
  credit: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 41,
    color: "#2D0C57",
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
