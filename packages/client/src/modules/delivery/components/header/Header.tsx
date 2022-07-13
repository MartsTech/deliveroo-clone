import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {XIcon} from 'react-native-heroicons/solid';

interface Props {
  onPress: () => void;
}

const DeliveryHeader: React.FC<Props> = ({onPress}) => {
  return (
    <View className="flex-row items-center justify-between p-5">
      <TouchableOpacity onPress={onPress}>
        <XIcon color="white" size={30} />
      </TouchableOpacity>
      <Text className="text-lg font-light text-white">Order Help</Text>
    </View>
  );
};

export default DeliveryHeader;
