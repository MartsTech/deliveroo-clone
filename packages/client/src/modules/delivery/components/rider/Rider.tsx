import React from 'react';
import {Image, Text, View} from 'react-native';

interface Props {
  title: string;
}

const DeliveryRider: React.FC<Props> = ({title}) => {
  return (
    <View className="h-28 flex-row items-center space-x-6 bg-white">
      <Image
        className="ml-5 h-12 w-12 rounded-full bg-gray-300 p-4"
        source={require('../../../../../assets/images/avatar.png')}
      />
      <View className="flex-1">
        <Text className="text-lg">{title}</Text>
        <Text className="text-gray-400">Your Rider</Text>
      </View>
      <Text className="mr-5 text-lg font-bold text-primary">Call</Text>
    </View>
  );
};

export default DeliveryRider;
