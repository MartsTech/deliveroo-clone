import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import colors from '../../../../constants/colors';
import HomeRestaurant from './components/Restaurant';

const HomeFeatured: React.FC<FeaturedModel> = ({
  title,
  description,
  restaurants,
}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color={colors.primary} />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>
      <FlatList
        className="px-4 pt-4"
        data={restaurants}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <HomeRestaurant {...item} />}
      />
    </View>
  );
};

export default HomeFeatured;
