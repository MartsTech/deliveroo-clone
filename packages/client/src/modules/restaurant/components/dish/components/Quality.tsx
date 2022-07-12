import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import colors from '../../../../../constants/colors';

interface Props {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

const RestaurantDishQuality: React.FC<Props> = ({count, onAdd, onRemove}) => {
  return (
    <View className="bg-white px-4">
      <View className="flex-row items-center pb-3">
        <TouchableOpacity onPress={onRemove}>
          <MinusCircleIcon color={colors.primary} size={40} />
        </TouchableOpacity>
        <Text className="mx-2">{count}</Text>
        <TouchableOpacity onPress={onAdd}>
          <PlusCircleIcon color={colors.primary} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantDishQuality;
