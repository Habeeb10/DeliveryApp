import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
export const SearchInput = ({ placeHolder, style, icon, inputStyle }) => {
  return (
    <View style={[styles.container, style]}>
      {icon}
      <TextInput placeholder={placeHolder} style={[styles.input, inputStyle]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D0E3",
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 20,
  },
  input: {
    fontSize: 20,
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
  },
});
