import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { HintIcon, Symbol } from "../../assets/svg";

export const CardInput = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  inputStyle,
  icon,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.cont}>
        <TextInput
          value={value}
          keyboardType={type}
          style={[styles.input, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor="#2D0C57"
          onChangeText={onChange}
          secureTextEntry={secure}
        />
        <View>{icon}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    width: 150,
    color: "#2D0C57",
    fontSize: 15,
    height: 45,
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: "#D9D0E3",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  container: {
    marginTop: 10,
  },
  label: {
    fontWeight: "400",
    fontSize: 14,
    color: "#9586A8",
    lineHeight: 22,
    marginLeft: 35,
  },
  input: {
    borderColor: "#D9D0E3",
  },
});
