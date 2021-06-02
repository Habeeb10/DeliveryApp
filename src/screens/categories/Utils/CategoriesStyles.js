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
