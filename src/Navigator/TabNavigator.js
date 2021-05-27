import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vegetable from '../screens/Vegetable';
import Categories from '../screens/Categories';
import Items from '../screens/Item';
import Payment from '../screens/Payment';
import Checkout from '../screens/Checkout';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
 <Tab.Navigator>
       <Tab.Screen name="categories" component={Categories} />
        <Tab.Screen name="vegetable" component={Vegetable} />
        <Tab.Screen name="items" component={Items} />
        <Tab.Screen name="checkout" component={Checkout} />
        <Tab.Screen name="payment" component={Payment} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
