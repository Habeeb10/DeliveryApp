import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import Vegetable from "../screens/Vegetable";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="vegetable" component={Vegetable} />
      
      
    </Stack.Navigator>
  );
}