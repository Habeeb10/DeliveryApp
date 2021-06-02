import React from "react";
import { View, StyleSheet, Text } from "react-native";
export const Checkoutadd = ({ icon, title, style }) => {
  return (
    <View style={[styles.homebox, style]}>
      {icon}
      <Text style={styles.address}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
