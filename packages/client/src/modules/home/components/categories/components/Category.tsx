import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  url: string;
}

const HomeCategory: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        className="h-20 w-20 rounded"
        source={require('../../../../../../assets/images/avatar.png')}
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeCategory;
