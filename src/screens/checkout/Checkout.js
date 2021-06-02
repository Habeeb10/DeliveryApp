import "react-native-gesture-handler";
import React from "react";
import { Switch, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BackIcon,
  BikeIcon,
  Card,
  CheckIcon,
  DroneIcon,
  HomeIcon,
  WalkIcon,
} from "../../../assets/svg";
import { Checkheader } from "./Utils/checkoutheader";
import { CheckoutStyles as styles } from "./Utils/checkoutStyles";
import { Checkcomponent } from "./Utils/checkoutcomponent";
import { Checkoutadd } from "./Utils/checkoutaddress";

export default function Checkout({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headbox}>
        <BackIcon
          style={styles.backicon}
          onPress={() => navigation.navigate("items")}
        />
        <Text style={styles.checkout}>Checkout</Text>
      </View>
      <Checkheader title="Payment method" label="CHANGE" />
      <View style={styles.cardbox}>
        <Card />
        <Text style={styles.cardnumber}>**** **** **** 4747</Text>
      </View>
      <Checkheader title="Delivery address" label="CHANGE" />
      <Checkoutadd
        icon={<HomeIcon />}
        title="Alexandra SmithCesu 31 k-2 5.st, SIA ChiliRigaLV–1012Latvia"
      />
      <Checkheader title="Delivery options" label="CHANGE" />
      <Checkcomponent icon={<WalkIcon />} title="I’ll pick it up myself" />
      <Checkcomponent icon={<BikeIcon />} title="By courier" />
      <View style={styles.dronebox}>
        <DroneIcon />
        <Text style={styles.drone}>By Drone</Text>
        <CheckIcon onPress={() => navigation.navigate("payment")} />
      </View>
      <View style={styles.switchbox}>
        <Text style={styles.contact}>Non-contact-delivery</Text>
        <Switch />
      </View>
    </View>
  );
}
