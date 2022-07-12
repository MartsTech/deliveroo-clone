import React from 'react';
import {Text, View} from 'react-native';
import {LocationMarkerIcon, StarIcon} from 'react-native-heroicons/solid';

interface Props {
  title: string;
  description: string;
  rating: number;
  category: string;
  address: string;
}

const RestaurantDescription: React.FC<Props> = ({
  title,
  description,
  rating,
  category,
  address,
}) => {
  return (
    <View className="px-4 pt-4">
      <Text className="text-3xl font-bold">{title}</Text>
      <View className="my-1 flex-row space-x-3">
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {category}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
      <Text className="mt-2 pb-4 text-justify text-gray-500">
        {description}
      </Text>
    </View>
  );
};

export default RestaurantDescription;
