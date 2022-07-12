import React from 'react';
import {ScrollView} from 'react-native';
import {urlFor} from '../../utils/sanity';
import RestaurantHeader from './components/header';

interface Props {
  restaurant: RestaurantModel;
}

const RestaurantModule: React.FC<Props> = ({restaurant: {image}}) => {
  return (
    <ScrollView>
      <RestaurantHeader url={urlFor(image).url()} />
    </ScrollView>
  );
};

export default RestaurantModule;
