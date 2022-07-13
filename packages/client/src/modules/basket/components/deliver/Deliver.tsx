import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const BasketDeliver = () => {
  return (
    <View className="my-5 flex-row items-center space-x-5 bg-white px-4 py-3">
      <Image
        className="h-7 w-7 rounded-full bg-gray-300 p-4"
        source={require('../../../../../assets/images/avatar.png')}
      />
      <Text className="flex-1">Deliver in 50-75 min</Text>
      <TouchableOpacity>
        <Text className="text-primary">Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketDeliver;
