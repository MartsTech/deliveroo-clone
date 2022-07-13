import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {XCircleIcon} from 'react-native-heroicons/solid';
import colors from '../../../../constants/colors';
import type {RootNavigationProps} from '../../../../types/navigation';

interface Props {
  title: string;
}

const BasketHeader: React.FC<Props> = ({title}) => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View className="border-b border-primary bg-white p-5 shadow-sm">
      <View>
        <Text className="text-center text-lg font-bold">Basket</Text>
        <Text className="text-center text-gray-400">{title}</Text>
      </View>
      <TouchableOpacity
        className="absolute top-5 right-5 rounded-full bg-gray-100"
        onPress={() => navigation.goBack()}>
        <XCircleIcon color={colors.primary} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default BasketHeader;
