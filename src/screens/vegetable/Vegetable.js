import "react-native-gesture-handler";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/header/Header";
import SearchIcon, { BackIcon } from "../../../assets/svg";
import { SearchInput } from "../../components/SeachInput";
import { VegCard } from "./utils/VegetableCard";
import * as Images from "../../../assets/images";
import { ShopCard } from "./utils/ShopCard";
import { VegetableStyles as styles } from "./utils/VegetableStyle";

const Vegetablecard = [
  {
    title: "Сabbage and lettuce",
    total: 14,
  },
  {
    title: "Сucumbers and tomatoes",
    total: 10,
  },

  {
    title: "Potatoes and carrots",
    total: 4,
  },
  {
    title: "Oinons and garlic",
    total: 8,
  },
  {
    title: "Peppers",
    total: 7,
  },
];

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
];

export default function Vegetable({ navigation, route }) {
  const [active, setActive] = useState("Сabbage and lettuce");
  const { title } = route.params;
  const food = getTitle(title);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="dark" />
        <View style={styles.headbox}>
          <Header
            style={styles.header}
            title={food}
            icon={
              <BackIcon onPress={() => navigation.navigate("categories")} />
            }
          />
          <Image source={Images.Flower} style={styles.flower} />
        </View>
        <View style={styles.searchbox}>
          <SearchInput icon={<SearchIcon />} placeHolder="Search" />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          style={styles.cabbagebox}
        >
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
        </ScrollView>
        <View style={styles.bostonbox}>
          {Shopcard.map((item, index) => {
            return (
              <ShopCard
                key={index}
                icon={item.icon}
                label={item.label}
                price={item.price}
                piece={item.piece}
                onPress={() =>
                  navigation.navigate("items", {
                    icon: item.icon,
                    label: item.label,
                    price: item.price,
                    piece: item.piece,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const getTitle = (title) => {
  switch (title) {
    case "Vegetables":
      return <Text>Vegetables</Text>;
    case "Fruits":
      return <Text>Fruits</Text>;
    case "Bread":
      return <Text>Bread</Text>;
    case "Sweets":
      return <Text>Sweets</Text>;
    case "Pasta":
      return <Text>Pasta</Text>;
    case "Drink":
      return <Text>Drink</Text>;
    default:
      return null;
  }
};
