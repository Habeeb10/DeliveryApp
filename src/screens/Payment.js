import "react-native-gesture-handler";
import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BackIcon, CardIcon, PhotoIcon, Symbol } from "../../assets/svg";
import * as Images from "../../assets/images";
import { Input } from "../components/Input";
import { PaymentStyles as styles } from "./Styles";
import { CardInput } from "../components/CardInput";

export default function Payment({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headbox}>
        <BackIcon
          style={{ marginTop: 50 }}
          onPress={() => navigation.navigate("checkout")}
        />
      </View>
      <Text style={styles.credit}>Credit / Debit card</Text>
      <Image style={styles.card} source={Images.Card} />
      <PhotoIcon style={{ alignSelf: "center", marginTop: 5 }} />
      <Input label="Name on card" placeHolder="Alexandra Smith" />
      <View style={styles.cardbox}>
        <Input
          label="Card number"
          placeHolder="4747  4747  4747  4747"
          icon={<Symbol />}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <CardInput
          label="Expiry date"
          placeHolder="07/21"
          inputStyle={styles.expirybox}
        />
        <CardInput
          label="CVC"
          icon={<CardIcon />}
          placeHolder="474"
          inputStyle={styles.expirybox}
        />
      </View>
      <TouchableOpacity style={styles.usebox}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
          USE THIS CARD
        </Text>
      </TouchableOpacity>
    </View>
  );
}
