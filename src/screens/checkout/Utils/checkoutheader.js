import React from "react";
import { View, StyleSheet, Text } from "react-native";
export const Checkheader = ({ title, label, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginTop: 18,
    alignItems: "center",
  },
  title: {
    color: "#2D0C57",
    fontSize: 22,
    fontWeight: "700",
  },
  label: {
    color: "#7203FF",
    fontWeight: "600",
    fontSize: 15,
  },
});
