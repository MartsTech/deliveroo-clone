import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BasketScreen from '../../screens/BasketScreen';
import HomeScreen from '../../screens/HomeScreen';
import OrderingScreen from '../../screens/OrderingScreen';
import RestaurantScreen from '../../screens/RestaurantScreen';
import type {RootStackParamList} from '../../types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
        <RootStack.Screen name="Basket" component={BasketScreen} />
        <RootStack.Screen name="Ordering" component={OrderingScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
