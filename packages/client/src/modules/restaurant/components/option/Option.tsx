import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {QuestionMarkCircleIcon} from 'react-native-heroicons/outline';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import colors from '../../../../constants/colors';

interface Props {
  title: string;
}

const RestaurantOption: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-4">
      <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
      <Text className="text-md flex-1 pl-2 font-bold">{title}</Text>
      <ChevronRightIcon color={colors.primary} />
    </TouchableOpacity>
  );
};

export default RestaurantOption;
