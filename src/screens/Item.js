import "react-native-gesture-handler";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Images from "../../assets/images";
import AppIntroSlider from "react-native-app-intro-slider";
import { CartIcon, VectorIcon } from "../../assets/svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ItemStyles as styles } from "./Styles";

const slides = [
  {
    key: 1,
    image: Images.Lettuce,
    title: "Boston Lettuce",
    piece: 150,
    pieceingram: "gr / piece",
    price: 1.1,
    priceineuro: "€ / piece",
    country: "Spain",
    topic:
      "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
  },
  {
    key: 2,
    image: Images.Caurliflower,
    title: "Purple Caurliflower",
    piece: 150,
    pieceingram: "gr / piece",
    price: 1.85,
    priceineuro: "€ / piece",
    country: "England",
    topic:
      "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
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
    topic:
      "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
  },
];

export default function Items({ navigation }) {
  const _renderItem = ({ item }) => {
    return (
      <View>
        <ImageBackground source={item.image} style={styles.image} />
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
        dotStyle={{
          backgroundColor: "grey",
          width: 20,
          borderRadius: 20,
          height: 20,
        }}
        activeDotStyle={{
          backgroundColor: "white",
          width: 20,
          borderRadius: 20,
          height: 20,
        }}
        showNextButton={false}
        showDoneButton={false}
      />
      <View style={styles.cartvectorbox}>
        <TouchableOpacity
          style={styles.vectorbox}
          onPress={() => navigation.navigate("vegetable")}
        >
          <VectorIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartbox}
          onPress={() => navigation.navigate("checkout")}
        >
          <CartIcon />
          <Text style={{ marginLeft: 20, color: "white" }}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
