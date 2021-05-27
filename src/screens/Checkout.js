import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BackIcon, BikeIcon, CardIcon, CheckIcon, DroneIcon, HomeIcon, WalkIcon} from "../../assets/svg";
import { Checkheader } from "../components/header/checkoutheader";

export default function Checkout({ navigation }) {
    return (
    <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.headbox}>
          <BackIcon style={{marginTop:50}} onPress={()=>navigation.navigate("items")}/>
          <Text style={styles.checkout}>Checkout</Text>
          </View> 
          <Checkheader
          title="Payment method"
          label="CHANGE"/>
          <View style={styles.cardbox}>
              <CardIcon/>
              <Text style={styles.heading}>**** **** **** 4747</Text>
          </View>
          <Checkheader title="Delivery address"
          label="CHANGE"/>
          <View style={styles.homebox}>
              <HomeIcon/>
              <Text style={styles.address}>
              Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV–1012 Latvia
              </Text>
          </View>
          <Checkheader 
          title="Delivery options"
          label="CHANGE"/>
          <View style={styles.courierbox}>
              <WalkIcon/>
              <Text style={styles.heading}>
              I’ll pick it up myself
              </Text>
          </View>
          <View style={styles.courierbox}>
              <BikeIcon/>
              <Text style={styles.heading}>By courier</Text>
          </View>
          <View style={styles.dronebox}>
              <DroneIcon/>
              <Text style={styles.drone}>By Drone</Text>
              <CheckIcon onPress={()=>navigation.navigate("payment")}/>
          </View>
          <View style={styles.switchbox}>
              <Text style={styles.contact}>Non-contact-delivery</Text>
              <Switch/>
          </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    contact:{
        fontWeight:"700",
        color:"#2D0C57",
        fontSize:22,
        lineHeight:22

    },
    switchbox:{
        flexDirection:"row",
        marginTop:40,
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    dronebox:{
        flexDirection:"row",
        paddingHorizontal:25,
        marginTop:25,
        alignItems:"center",
        justifyContent:"space-between"
    },
    drone:{
        marginRight:170,
        color:"#7203FF",
        fontWeight:"600",
        fontSize:17,
    },
    address:{
          marginLeft:26,
          width:128,
          lineHeight:25,
          fontSize:17,
          color:"#9586A8",
          fontWeight:"400",
      },
    homebox:{
          paddingHorizontal:25,
          flexDirection:"row",
          marginTop:30,  
          marginBottom:20
      },
    heading:{
          marginLeft:26,
          color:"#9586A8",
          fontWeight:"600",
          fontSize:17,   
      },
    courierbox:{
        flexDirection:"row",
        paddingHorizontal:25,
        marginTop:30,
        alignItems:"center",
        marginBottom:10
      },
    cardbox:{
          flexDirection:"row",
          paddingHorizontal:25,
          marginTop:30,
          alignItems:"center",
          marginBottom:20

      },
    checkout:{
          fontWeight:"600",
          fontSize:17,
          marginLeft:130,
          color:"#2D0C57",
          marginTop:50
      },
    headbox:{
      flexDirection:"row", 
      paddingHorizontal:25,
      alignItems:"center",
      width:"100%",
      height:100,
      borderWidth:1,
      borderColor:"white",
      backgroundColor:"white"
    },   
    container: {
      flex: 1,
      backgroundColor:"#F6F5F5",
    },
  });
  