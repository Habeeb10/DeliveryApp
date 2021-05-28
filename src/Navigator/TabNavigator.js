import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vegetable from '../screens/Vegetable';
import Categories from '../screens/Categories';
import Items from '../screens/Item';
import Profile from '../screens/Profile';
import Checkout from '../screens/Checkout';
import { Grid, Shoppingcart, User } from '../../assets/svg';
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator headerMode={false}>
      <CategoriesStack.Screen name="categories" component={Categories} />
      <CategoriesStack.Screen name="vegetable" component={Vegetable} />
      <CategoriesStack.Screen name="items" component={Items} />
    </CategoriesStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
 <Tab.Navigator
 screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === "categories") {
      return <Grid color={focused ? "#7203FF" : "#9586A8"} />;
    } else if (route.name === "checkout") {
      return <Shoppingcart color={focused ? "#7203FF" : "#9586A8"} />
    } else if (route.name === "profile") {
      return <User color={focused ? "#7203FF" : "#9586A8"} />}
  },
})}
tabBarOptions={{
  activeTintColor: "#7203FF",
  inactiveTintColor: "#9586A8",
}}>
       <Tab.Screen name="categories" component={CategoriesStackScreen} />
        {/* <Tab.Screen name="vegetable" component={Vegetable} /> */}
        <Tab.Screen name="checkout" component={Checkout} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
