import "react-native-gesture-handler";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Images from "../../assets/images";
import AppIntroSlider from "react-native-app-intro-slider";
import { CartIcon, VectorIcon } from "../../assets/svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const slides = [
 { key: 1,
   image: Images.Lettuce,
   title:"Boston Lettuce",
   piece: 150,
   pieceingram:"gr / piece",
   price: 1.10,
   priceineuro: "€ / piece",
   country:"Spain",
   topic: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled."
},
 {
     key: 2,
    image: Images.Caurliflower,
    title: "Purple Caurliflower",
    piece:  150 ,
    pieceingram:"gr / piece",
    price: 1.85, 
    priceineuro: "€ / piece",
    country: "England",
    topic: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled."
},
 {
    key: 3,
    image: Images.Cabbage,
    title: "Savoy Cabbage",
    piece: 150,
    pieceingram: "gr / piece",
    price: 145,
    priceineuro: "€ / piece",
    country: "Germany",
    topic: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled."
},
];

export default function Items({navigation}) {
 const _renderItem = ({ item }) => {
   return (
     <View> 
        <ImageBackground source={item.image} style={styles.image}/>
        <View style={styles.lettucebox}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.box}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.priceineuro}>{item.priceineuro}</Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.piece}>{item.piece}</Text>
        <Text style={styles.pieceingram}>{item.pieceingram}</Text>
        </View>
        <Text style={styles.country}>{item.country}</Text>
        <Text style={styles.topic}>{item.topic}</Text>
        </View>
     </View>
   );
 }; 
   return (
     <View style={styles.container}>
       <StatusBar style={"light"} />
       <AppIntroSlider
         renderItem={_renderItem}
         data={slides}
         dotStyle={{ backgroundColor: "grey", width:20, borderRadius:20,  height:20,  }}
         activeDotStyle={{ backgroundColor: "white", width:20, borderRadius:20, height:20  }}
       />
       <View style={styles.cartvectorbox}>
       <TouchableOpacity style={styles.vectorbox}
       onPress={()=>navigation.navigate("vegetable")}>
           <VectorIcon/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.cartbox}
       onPress={()=>navigation.navigate("checkout")}>
           <CartIcon/> 
           <Text style={{marginLeft:20, color:"white"}}
           >ADD TO CART</Text>
       </TouchableOpacity>
       </View>
       
     </View>
   );
}

const styles = StyleSheet.create({
    cartvectorbox:{
     flexDirection:"row",
     paddingHorizontal:30,
     justifyContent:"space-between"
    },
    cartbox:{
     width:"85%",
     height:60,
     backgroundColor:"#0BCE83",
     borderRadius:10,
     alignItems:"center",
     justifyContent:"center",
     flexDirection:"row",
     marginLeft:30
    },
    vectorbox:{
     width:100,
     height:60,
     backgroundColor:"white",
     borderRadius:10,
     alignItems:"center",
     justifyContent:"center",
     borderWidth:1,
     borderColor:"#D9D0E3",
     
    },
    box:{
     flexDirection:"row", 
     alignItems:"center", 
     marginTop:10
    },
    lettucebox:{
     paddingHorizontal:30,
    },
    country:{
     fontSize:22,
     fontWeight:"700",
     color:"#2D0C57",
     marginTop:20 
    },
    piece:{
     fontWeight:"500",
     color:"#06BE77",
     fontSize:17
    },
    pieceingram:{
     marginLeft:5,
     fontWeight:"500",
     color:"#06BE77",
     fontSize:17
    },
    price:{
     fontWeight:"700",
     color:"#2D0C57",
     fontSize:32
    },
    priceineuro:{
     marginLeft:10,
     fontWeight:"400",
     color:"#9586A8",
     fontSize:24
    },
    topic:{
     color:"#9586A8",
     fontSize:16,
     fontWeight:"400",
     marginTop:20,
     height:194,
     lineHeight:26,
     alignItems:"center",
     alignSelf:"center"
     
 },
    title:{
    marginTop:20,
    color: "#2D0C57",
    marginBottom:5,
    fontSize:30,
    fontWeight:"700",
    lineHeight:36,
 },
    image:{
    height:270,
    resizeMode:"contain",
 

 },
   container: {
   flex: 1,
},
});
