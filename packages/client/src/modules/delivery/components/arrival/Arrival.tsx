import React from 'react';
import {Image, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../../../../constants/colors';

interface Props {
  title: string;
}

const DeliveryArrival: React.FC<Props> = ({title}) => {
  return (
    <View className="z-50 mx-5 my-2 rounded-md bg-white p-6 shadow-sm">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg text-gray-400">Estimated Arrival</Text>
          <Text className="text-4xl font-bold">45-55 Minutes</Text>
        </View>
        <Image
          className="h-20 w-20"
          source={require('../../../../../assets/images/delivery.gif')}
        />
      </View>
      <Progress.Bar color={colors.primary} indeterminate={true} />
      <Text className="mt-3 text-gray-500">
        Your order at {title} is being prepared
      </Text>
    </View>
  );
};

export default DeliveryArrival;
