import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import colors from '../../../../constants/colors';
import type {RootNavigationProps} from '../../../../types/navigation';

interface Props {
  url: string;
}

const RestaurantHeader: React.FC<Props> = ({url}) => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View className="relative">
      <Image className="h-56 w-full bg-gray-300 p-4" source={{uri: url}} />
      <TouchableOpacity
        className="absolute top-14 left-5 rounded-full bg-gray-100 p-2"
        onPress={() => navigation.goBack()}>
        <ArrowLeftIcon size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantHeader;
