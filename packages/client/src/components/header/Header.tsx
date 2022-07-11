import React from 'react';
import {Image, Text, View} from 'react-native';
import {ChevronDownIcon, UserIcon} from 'react-native-heroicons/outline';
import colors from '../../constants/colors';

const Header = () => {
  return (
    <View className="mx-4 flex-row items-center space-x-2 pb-3">
      <Image
        className="h-7 w-7 rounded-full bg-gray-300 p-4"
        source={require('../../../assets/images/avatar.png')}
      />
      <View className="flex-1">
        <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
        <Text className="text-xl font-bold">
          Current Location <ChevronDownIcon size={20} color={colors.primary} />
        </Text>
      </View>
      <UserIcon size={35} color={colors.primary} />
    </View>
  );
};

export default Header;
