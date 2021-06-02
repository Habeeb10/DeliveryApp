import "react-native-gesture-handler";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ProfileStyles as styles } from "./Styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.Profile}>Profile</Text>
    </View>
  );
}
