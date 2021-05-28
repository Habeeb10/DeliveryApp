import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import { MyTabs } from "../Navigator/TabNavigator";
import Vegetable from "../screens/Vegetable";
import Items from "../screens/Item";
import Payment from "../screens/Payment";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="categories" component={MyTabs} />
    </Stack.Navigator>
  );
}
