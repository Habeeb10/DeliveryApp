import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MyTabs } from "../Navigator/TabNavigator";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="categories" component={MyTabs} />
    </Stack.Navigator>
  );
}
