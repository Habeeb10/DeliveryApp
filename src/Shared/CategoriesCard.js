import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
 export const CategoriesCard = ({ icon, title, numbers, onPress }) => {
    return (
      <TouchableOpacity style={styles.base}
      onPress={onPress}>
        <Image resizeMode="cover" style={styles.image} source={icon}  />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.numbers}>{`(${numbers})`}</Text> 
      </TouchableOpacity>
    
    );
  };
  const styles = StyleSheet.create({
    base: {
      width: 165,
      height: 245,
      backgroundColor: "white",
      marginTop: 30,
      borderRadius: 8
      },
    image: {
        width: 165,
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
      },
    title:{
        marginLeft:10,
        marginTop:15,
        color:"#2D0C57",
        fontSize:20,
        lineHeight:20
      },
      numbers:{
        marginLeft:10,
        marginTop:10,
        color:"#9586A8"
      },
  });
  