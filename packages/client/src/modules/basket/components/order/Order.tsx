import React from 'react';
import Currency from 'react-currency-formatter';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  total: number;
  fee: number;
}

const BasketOrder: React.FC<Props> = ({total, fee}) => {
  return (
    <View className="mt-5 space-y-4 bg-white p-5">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Subtotal</Text>
        <Text className="text-gray-400">
          <Currency quantity={total} currency="EUR" />
        </Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">
          <Currency quantity={fee} currency="EUR" />
        </Text>
      </View>
      <View className="flex-row justify-between">
        <Text>Order Total</Text>
        <Text className="font-extrabold">
          <Currency quantity={total + fee} currency="EUR" />
        </Text>
      </View>
      <TouchableOpacity className="rounded-lg bg-primary p-4">
        <Text className="text-center text-lg font-bold text-white">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketOrder;
