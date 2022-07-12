import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {urlFor} from '../../../../../utils/sanity';

interface Props {
  category: CategoryModel;
}

const HomeCategory: React.FC<Props> = ({category: {title, image}}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        className="h-20 w-20 rounded"
        source={{uri: urlFor(image).url()}}
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeCategory;
