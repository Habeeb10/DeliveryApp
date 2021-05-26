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
        label: "Boston Lettuce",
        price: 1.1,
        icon: Images.Lettuce,
        cart: <CartIcon/>,
        vector: <VectorIcon/>,
        piece: "€ / piece",
        total: 14,
      },
      {
        title: "Сucumbers and tomatoes",
        label: "Purple Cauliflower",
        price: 1.85,
        icon: Images.Caurliflower,
        cart: <CartIcon/>,
        vector: <VectorIcon/>,
        piece: "€ / kg",
        total:10,
      },
      {
        title: "Oinons and garlic",
        label: "Savoy Cabbage",
        price: 1.45,
        icon: Images.Cabbage,
        carticon: <CartIcon/>,
        vectoricon: <VectorIcon/>,
        piece: "€ / kg",
        total:8
      },
      {
        title: "Peppers",
        total: 17
      },
      {
         title: "Potatoes and carrots",
         total:4
      }
]

export default function Vegetable({ navigation }) {
    const [active, setActive] = useState("Сabbage and lettuce (14)");

    return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
        <StatusBar style="dark" />
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
        <Header  style={styles.header}
          title="Vegetable"
          icon={<BackIcon/>}
          onPress={()=>navigation.navigate("categories")} 
          />
          <Image source={Images.Flower} style={{ height:150, width:200, resizeMode:"contain", marginLeft:40}}/>
        </View>
          <View style={styles.searchbox}>
           <SearchInput
           icon={<SearchIcon/>}
           placeHolder="Search"
           />
          </View>   
       <View  style={styles.box}>
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
          <View style={styles.box}> 
           {Vegetablecard.map((item, index) => {
            return (
            <ShopCard
              key={index}
              icon={item.icon}
              label={item.label}
              price={item.price}
              piece={item.piece}
              vectoricon={item.vectoricon}
              carticon={item.carticon}            
            />
            );
            })}
            </View> 
        </ScrollView>     
    </View>
    );
  }

  const styles = StyleSheet.create({
    box:{
        marginTop: 20,
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:100
      },
    searchbox:{
      flexDirection:"row",
    },  
    container: {
      flex: 1,
      padding: 20,
      backgroundColor:"#F6F5F5",
    },
  });
  