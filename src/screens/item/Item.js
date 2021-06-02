import "react-native-gesture-handler";
import React from "react";
import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CartIcon, VectorIcon } from "../../../assets/svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ItemStyles as styles } from "../item/ItemStyles";

export default function Items({ navigation, route }) {
  const { label, price, piece } = route.params;
  const icon = getImage(label);
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      {icon}
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
      return (
        <Image
          source={require("../../../assets/images/Lettuce.png")}
          style={styles.image}
        />
      );

    case "Purple Cauliflower":
      return (
        <Image
          source={require("../../../assets/images/Caurliflower.png")}
          style={styles.image}
        />
      );
    case "Savoy Cabbage":
      return (
        <Image
          source={require("../../../assets/images/Cabbage.png")}
          style={styles.image}
        />
      );

    default:
      return null;
  }
};
