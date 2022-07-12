import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import colors from '../../constants/colors';
import {RootNavigationProps} from '../../types/navigation';
import {urlFor} from '../../utils/sanity';

interface Props {
  restaurant: RestaurantModel;
}

const RestaurantModule: React.FC<Props> = ({restaurant: {image}}) => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <ScrollView>
      <View className="relative">
        <Image
          className="h-56 w-full bg-gray-300 p-4"
          source={{uri: urlFor(image).url()}}
        />
        <TouchableOpacity
          className="absolute top-14 left-5 rounded-full bg-gray-100 p-2"
          onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantModule;
