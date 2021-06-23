import "react-native-gesture-handler";
import React from "react";
import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CartIcon, VectorIcon } from "../../../assets/svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ItemStyles as styles } from "../item/ItemStyles";

export default function Items({ navigation, route }) {
  const { details } = route.params;
  const { price, label, piece } = details;
  const icon = getImage(label);
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <Image source={icon} style={styles.image} />

      <Text style={styles.label}>{label}</Text>
      <View style={styles.piecebox}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.piece}>{piece}</Text>
      </View>
      <Text style={styles.piecegr}>~ 150 gr / piece</Text>
      <Text style={styles.country}>Spain</Text>
      <Text style={styles.topic}>
        "Lettuce is an annual plant of the daisy family, Asteraceae. It is most
        often grown as a leaf vegetable, but sometimes for its stem and seeds.
        Lettuce is most often used for salads, although it is also seen in other
        kinds of food, such as soups, sandwiches and wraps; it can also be
        grilled.",
      </Text>
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
          <Text style={styles.add}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getImage = (label) => {
  switch (label) {
    case "Boston Lettuce":
      return require("../../../assets/images/Lettuce.png");

    case "Purple Cauliflower":
      return require("../../../assets/images/Caurliflower.png");

    case "Savoy Cabbage":
      return require("../../../assets/images/Cabbage.png");

    default:
      return null;
  }
};
