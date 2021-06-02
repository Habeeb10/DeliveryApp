import "react-native-gesture-handler";
import React from "react";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/header/Header";
import SearchIcon, { BackIcon } from "../../../assets/svg";
import { SearchInput } from "../../components/SeachInput";
import { CategoriesCard } from "./Utils/CategoriesCard";
import * as Images from "../../../assets/images";
import { CategoriesStyles as styles } from "./Utils/CategoriesStyles";

const BEVERAGES = [
  {
    icon: Images.Vegetable,
    title: "Vegetables",
    numbers: 43,
  },
  {
    icon: Images.Fruits,
    title: "Fruits",
    numbers: 32,
  },
  {
    icon: Images.Bread,
    title: "Bread",
    numbers: 22,
  },
  {
    icon: Images.Sweets,
    title: "Sweets",
    numbers: 56,
  },
  {
    icon: Images.Pasta,
    title: "Pasta",
    numbers: 43,
  },
  {
    icon: Images.Drink,
    title: "Drink",
    numbers: 43,
  },
];
export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="dark" />
        <Header
          style={styles.header}
          title="Categories"
          onPress={() => navigation.navigate("vegetable")}
          icon={<BackIcon />}
        />
        <View style={styles.searchbox}>
          <SearchInput icon={<SearchIcon />} placeHolder="Search"></SearchInput>
        </View>
        <View style={styles.bevbox}>
          {BEVERAGES.map((item, index) => {
            return (
              <CategoriesCard
                key={index}
                icon={item.icon}
                title={item.title}
                numbers={item.numbers}
                onPress={() =>
                  navigation.navigate("vegetable", { title: item.title })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
