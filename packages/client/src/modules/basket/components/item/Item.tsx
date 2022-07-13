import React from 'react';
import Currency from 'react-currency-formatter';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {urlFor} from '../../../../utils/sanity';

interface Props {
  quantity: number;
  item: DishModel;
  onRemove: () => void;
}

const BasketItem: React.FC<Props> = ({
  quantity,
  item: {image, title, price},
  onRemove,
}) => {
  return (
    <View className="flex-row items-center border-t border-gray-200 bg-white py-2 px-5">
      <Text className="text-primary">{quantity} x</Text>
      <Image
        className="mx-3 h-12 w-12 rounded-full"
        source={{uri: urlFor(image).url()}}
      />
      <Text className="flex-1">{title}</Text>
      <Text className="mx-3 text-gray-600">
        <Currency quantity={price * quantity} currency="EUR" />
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Text className="text-xs text-primary">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItem;
