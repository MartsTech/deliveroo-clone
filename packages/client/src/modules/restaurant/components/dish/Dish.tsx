import React, {useState} from 'react';
import Currency from 'react-currency-formatter';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {urlFor} from '../../../../utils/sanity';
import RestaurantDishQuality from './components/Quality';

interface Props {
  dish: DishModel;
}

const RestaurantDish: React.FC<Props> = ({
  dish: {title, description, price, image},
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`border border-gray-200 bg-white p-4 ${
          isPressed && 'border-b-0'
        }`}
        onPress={() => setIsPressed(value => !value)}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg">{title}</Text>
            <Text className="text-justify text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">
              <Currency quantity={price} currency="EUR" />
            </Text>
          </View>
          <View>
            <Image
              className="h-20 w-20 bg-gray-300 p-4"
              source={{uri: urlFor(image).url()}}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && <RestaurantDishQuality />}
    </>
  );
};

export default RestaurantDish;
