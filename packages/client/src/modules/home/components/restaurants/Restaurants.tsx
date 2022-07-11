import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import colors from '../../../../constants/colors';
import HomeRestaurant from './components/Restaurant';

interface Props {
  title: string;
  description: string;
  category: string;
}

const HomeRestaurants: React.FC<Props> = ({title, description}) => {
  const [restaurants] = useState([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
  ]);

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
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <HomeRestaurant
            id={item}
            title={item}
            url={item}
            rating={(index % 5) + 1}
            genre={item}
            address={item}
            short_description={item}
            dishes={[item]}
            long={index}
            lat={index}
          />
        )}
      />
    </View>
  );
};

export default HomeRestaurants;
