import "react-native-gesture-handler";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.Profile}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Profile: {
    textAlign: "center",
    marginTop: 200,
  },
});
