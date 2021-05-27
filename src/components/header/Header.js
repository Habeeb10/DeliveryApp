import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Header = ({ title, icon, style, onPress }) => {
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity onPress={onPress}>
        {icon} 
        </TouchableOpacity>
        <View>
          <Text style={styles.title} >{title}</Text>
          </View>  

        
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      marginTop:25
    },
    title: {
      color: "#2D0C57",
      fontSize: 35,
      lineHeight:41,
      marginTop:20,
      fontWeight:"700"
    },
  });
  