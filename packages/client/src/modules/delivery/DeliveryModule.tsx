import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {selectSelectedRestaurant} from '../../stores/restaurantStore';
import {useAppSelector} from '../../stores/store';
import type {RootNavigationProps} from '../../types/navigation';
import DeliveryArrival from './components/arrival';
import DeliveryHeader from './components/header';
import DeliveryMap from './components/map';
import DeliveryRider from './components/rider';

const DeliveryModule = () => {
  const restaurant = useAppSelector(selectSelectedRestaurant);
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="z-50">
        <DeliveryHeader onPress={() => navigation.navigate('Home')} />
        <DeliveryArrival title={restaurant?.title || ''} />
      </SafeAreaView>
      <DeliveryMap
        title={restaurant?.title || ''}
        description={restaurant?.description || ''}
        latitude={restaurant?.lat || 0}
        longitude={restaurant?.long || 0}
      />
      <DeliveryRider title={restaurant?.title || ''} />
    </View>
  );
};

export default DeliveryModule;
