import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { HintIcon, Symbol } from "../../assets/svg";

export const Input = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  inputStyle,
  
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={{flexDirection:"row", alignItems:"center"}}>
      <TextInput
        value={value}
        keyboardType={type}
        style={[styles.input, inputStyle]}
        placeholder={placeHolder}
        placeholderTextColor="#2D0C57"
        onChangeText={onChange}
        secureTextEntry={secure}
        
      />
      
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
        marginTop: 10
      },
  label: {
    fontWeight: "400",
    fontSize: 14,
    color: "#9586A8",
    lineHeight: 22,
    marginLeft:40,
  },
  input: {
    width: "90%",
    color: "#2D0C57",
    fontSize: 15,
    height: 45,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingLeft: 20,
    marginLeft:20,
    borderWidth:1,
    borderColor:"#D9D0E3",
    marginBottom:10
   
  },
});
