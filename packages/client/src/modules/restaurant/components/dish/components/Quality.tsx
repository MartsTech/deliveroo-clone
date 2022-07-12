import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import colors from '../../../../../constants/colors';

const RestaurantDishQuality = () => {
  return (
    <View className="bg-white px-4">
      <View className="flex-row items-center pb-3">
        <TouchableOpacity>
          <MinusCircleIcon color={colors.primary} size={40} />
        </TouchableOpacity>
        <Text className="mx-2">0</Text>
        <TouchableOpacity>
          <PlusCircleIcon color={colors.primary} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantDishQuality;
