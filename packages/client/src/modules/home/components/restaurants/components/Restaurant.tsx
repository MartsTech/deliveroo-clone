import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LocationMarkerIcon} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';

const HomeRestaurant: React.FC<RestaurantModel> = ({
  title,
  rating,
  genre,
  address,
}) => {
  return (
    <TouchableOpacity className="mr-3 bg-white shadow">
      <Image
        className="h-36 w-64 rounded-sm"
        source={require('../../../../../../assets/images/avatar.png')}
      />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeRestaurant;
