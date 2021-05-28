import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BackIcon,
  BikeIcon,
  CardIcon,
  CheckIcon,
  DroneIcon,
  HomeIcon,
  WalkIcon,
} from "../../assets/svg";
import { Checkheader } from "../components/header/checkoutheader";
import { CheckoutStyles as styles } from "./Styles";

export default function Checkout({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headbox}>
        <BackIcon
          style={{ marginTop: 50 }}
          onPress={() => navigation.navigate("items")}
        />
        <Text style={styles.checkout}>Checkout</Text>
      </View>
      <Checkheader title="Payment method" label="CHANGE" />
      <View style={styles.cardbox}>
        <CardIcon />
        <Text style={styles.heading}>**** **** **** 4747</Text>
      </View>
      <Checkheader title="Delivery address" label="CHANGE" />
      <View style={styles.homebox}>
        <HomeIcon />
        <Text style={styles.address}>
          Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV–1012 Latvia
        </Text>
      </View>
      <Checkheader title="Delivery options" label="CHANGE" />
      <View style={styles.courierbox}>
        <WalkIcon />
        <Text style={styles.heading}>I’ll pick it up myself</Text>
      </View>
      <View style={styles.courierbox}>
        <BikeIcon />
        <Text style={styles.heading}>By courier</Text>
      </View>
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
