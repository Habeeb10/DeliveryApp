import React from "react";
import { View, StyleSheet, Text } from "react-native";
export const Checkcomponent = ({ icon, title, style }) => {
  return (
    <View style={[styles.courierbox, style]}>
      {icon}
      <Text style={styles.line}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
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
});
