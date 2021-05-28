import "react-native-gesture-handler";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/header/Header";
import SearchIcon, { BackIcon } from "../../assets/svg";
import { SearchInput } from "../components/SeachInput";
import { VegCard } from "../Shared/VegetableCard";
import * as Images from "../../assets/images";
import { ShopCard } from "../Shared/ShopCard";
import { VegetableStyles as styles } from "./Styles";

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

export default function Vegetable({ navigation }) {
  const [active, setActive] = useState("Сabbage and lettuce");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="dark" />
        <View style={styles.headbox}>
          <Header
            style={styles.header}
            title="Vegetable"
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
                onPress={() => navigation.navigate("items")}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
