import React from 'react';
import type {ImageSourcePropType} from 'react-native';
import {Image, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  source: ImageSourcePropType;
}

const HomeCategory: React.FC<Props> = ({title, source}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image className="h-20 w-20 rounded" source={source} />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeCategory;
