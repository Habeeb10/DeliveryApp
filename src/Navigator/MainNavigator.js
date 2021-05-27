import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import { MyTabs } from "../Navigator/TabNavigator";
import Vegetable from "../screens/Vegetable";
import Items from "../screens/Item";
import Checkout from "../screens/Checkout";
import Payment from "../screens/Profile";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="categories" component={MyTabs} />
      <Stack.Screen name="vegetable" component={Vegetable} />
      <Stack.Screen name="items" component={Items} />
      {/* <Stack.Screen name="checkout" component={Checkout} /> */}
      {/* <Stack.Screen name="payment" component={Payment} /> */}
    </Stack.Navigator>
  );
}