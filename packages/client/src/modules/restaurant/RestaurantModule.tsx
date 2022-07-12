import React from 'react';
import {ScrollView, View} from 'react-native';
import {urlFor} from '../../utils/sanity';
import RestaurantDescription from './components/description';
import RestaurantHeader from './components/header';
import RestaurantOption from './components/option';

interface Props {
  restaurant: RestaurantModel;
}

const RestaurantModule: React.FC<Props> = ({
  restaurant: {image, title, rating, category, address, description},
}) => {
  return (
    <ScrollView>
      <RestaurantHeader url={urlFor(image).url()} />
      <View className="bg-white">
        <RestaurantDescription
          title={title}
          description={description}
          rating={rating}
          address={address}
          category={category.title}
        />
        <RestaurantOption title="Have a food allergy?" />
      </View>
    </ScrollView>
  );
};

export default RestaurantModule;
