import "react-native-gesture-handler";
import React, {useState} from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/header/Header";
import SearchIcon, { BackIcon, CartIcon, VectorIcon} from "../../assets/svg";
import {SearchInput} from "../components/SeachInput";
import { VegCard } from "../Shared/VegetableCard";
import * as Images from "../../assets/images";
import { ShopCard } from "../Shared/ShopCard";


const Vegetablecard = [
    {
    title: "Сabbage and lettuce",
    total: 14
   },
   {
    title: "Сucumbers and tomatoes",
    total:10,
   },
   {
    title: "Oinons and garlic",
    total:8
   },
   {
    title: "Potatoes and carrots",
    total:4
   },
   {
    title: "Peppers",
    total: 17
   },
  ]


const Shopcard = [
  { 
    label: "Boston Lettuce",
    price: 1.1,
    icon: Images.Lettuce,
    piece: "€ / piece",
  },
  {
    label: "Purple Cauliflower",
    price: 1.85,
    icon: Images.Caurliflower,
    piece: "€ / kg",
    
  },
  { 
    label: "Savoy Cabbage",
    price: 1.45,
    icon: Images.Cabbage,
    piece: "€ / kg",
    
  },
]
     
export default function Vegetable({ navigation }) {
    const [active, setActive] = useState("Сabbage and lettuce");

    return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
        <StatusBar style="dark" />
        <View style={styles.headbox}>
        <Header  style={styles.header}
          title="Vegetable"
          icon={<BackIcon onPress={()=>navigation.navigate("categories")} />}
          
          />
          <Image source={Images.Flower} style={styles.flower}/>
        </View>
          <View style={styles.searchbox}>
           <SearchInput
           icon={<SearchIcon/>}
           placeHolder="Search"
           />
          </View>   
       <View  style={styles.cabbagebox}>
         {Vegetablecard.map((item, index) => {
          return (
            <VegCard
              key={index}
              title={item.title}
              total={item.total}
              onPress={() => setActive(item.title)}
              isActive={item.title === active}   
            />
           );
          })}
          </View> 
          <View style={styles.bostonbox}> 
           {Shopcard.map((item, index) => {
            return (
            <ShopCard
              key={index}
              icon={item.icon}
              label={item.label}
              price={item.price}
              piece={item.piece} 
              onPress={()=>navigation.navigate("items")}
                   
            />
            );
            })}
            </View> 
        </ScrollView>     
    </View>
    );
  }

  const styles = StyleSheet.create({

    headbox:{
      flexDirection:"row", 
      justifyContent:"space-between",
      width:"100%",
      paddingHorizontal:20,
      marginTop:25

    },
    flower:{
      height:160, 
      width:230,
      // marginLeft:10,
      resizeMode:"contain"
    
    },
    cabbagebox:{
      marginTop: 10,
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20,
        paddingHorizontal:15,
      
    },
    bostonbox:{
        marginTop: 20,
        paddingHorizontal:20
      },
    searchbox:{
      flexDirection:"row",
      width:"100%",
      paddingHorizontal:20,
    },  
    container: {
      flex: 1,
      // padding: 20,
      backgroundColor:"#F6F5F5",
    },
  });
  