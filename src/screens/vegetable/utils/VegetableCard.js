import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckIcon } from "../../../../assets/svg";

export const VegCard = ({ title, onPress, isActive, total }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isActive && styles.container]}
      onPress={onPress}
    >
      {isActive ? <CheckIcon /> : null}
      <Text style={[styles.title, isActive && styles.textcolor]}>
        {title}
        {`(${total})`}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textcolor: {
    color: "#6C0EE4",
  },
  container: {
    backgroundColor: "#E2CBFF",
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: 200,
    justifyContent: "center",
  },
  title: {
    color: "#9586A8",
    fontSize: 13,
  },
});
