import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Currency from 'react-currency-formatter';
import {Text, TouchableOpacity, View} from 'react-native';
import type {RootNavigationProps} from '../../../../types/navigation';

interface Props {
  itemsCount: number;
  totalPrice: number;
}

const RestaurantBasket: React.FC<Props> = ({itemsCount, totalPrice}) => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        className="mx-5 flex-row items-center space-x-1 rounded-lg bg-primary p-4"
        onPress={() => navigation.navigate('Basket')}>
        <Text className="py-1 px-2 text-lg font-extrabold text-white">
          {itemsCount}
        </Text>
        <Text className="flex-1 text-center text-lg font-extrabold text-white">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={totalPrice} currency="EUR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantBasket;
