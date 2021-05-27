import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BackIcon, HintIcon, PhotoIcon} from "../../assets/svg";
import * as Images from "../../assets/images";
import { Input } from "../components/Input";

export default function Payment({ navigation }) {
    return (
    <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.headbox}>
          <BackIcon style={{marginTop:50}} onPress={()=>navigation.navigate("checkout")} />
        </View>
        <Text style={styles.credit}>Credit / Debit card</Text>
        <Image style={styles.card} source={Images.Card}/>
        <PhotoIcon style={{alignSelf:"center",marginTop:5}}/>
        <Input 
        label="Name on card"
        placeHolder="Alexandra Smith"
        />
        <Input 
        label="Card number"
        placeHolder="4747  4747  4747  4747"
        />
        <View style={{flexDirection:"row"}}>
        <Input 
        label="Expiry date"
        placeHolder="07/21"
        inputStyle={styles.expirybox}
        />
         <Input 
        label="CVC"
        placeHolder="474"
        inputStyle={styles.expirybox}
        />
        </View>
        <TouchableOpacity style={styles.usebox}>
          <Text style={{color:"white", fontSize:15, fontWeight:"600"}} >USE THIS CARD</Text>
        </TouchableOpacity>
    </View>
    );
  }

  const styles = StyleSheet.create({
    usebox:{
        width:"90%",
        height:60,
        backgroundColor:"#0BCE83",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        marginLeft:20,
        marginTop:10
        
       },
    expirybox:{
        fontSize:17, 
        lineHeight:22, 
        fontWeight:"400",
        height:48, 
        width:165
      },
    card:{
        width:374,
        height:250,
        resizeMode:"cover",
        marginLeft:5,
        // marginTop:10
    },
    credit:{
        fontSize:30,
        fontWeight:"700",
        lineHeight:41,
        color:"#2D0C57",
        // marginTop:10,
        paddingHorizontal:25
    },
    headbox:{
      flexDirection:"row", 
      paddingHorizontal:25,
      alignItems:"center",
      width:"100%",
      height:90,
      borderWidth:1,
      borderColor:"white",
      backgroundColor:"white"
    },   
    container: {
      flex: 1,
      backgroundColor:"#F6F5F5",
    },
  });
  