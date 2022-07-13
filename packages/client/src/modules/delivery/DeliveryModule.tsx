import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {selectSelectedRestaurant} from '../../stores/restaurantStore';
import {useAppSelector} from '../../stores/store';
import type {RootNavigationProps} from '../../types/navigation';
import DeliveryArrival from './components/arrival';
import DeliveryHeader from './components/header';

const DeliveryModule = () => {
  const restaurant = useAppSelector(selectSelectedRestaurant);
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="z-50">
        <DeliveryHeader onPress={() => navigation.navigate('Home')} />
        <DeliveryArrival title={restaurant?.title || ''} />
      </SafeAreaView>
    </View>
  );
};

export default DeliveryModule;
