import React from 'react';
import {FlatList} from 'react-native';
import HomeCategory from './components/Category';

interface Props {
  categories: CategoryModel[];
}

const HomeCategories: React.FC<Props> = ({categories}) => {
  return (
    <FlatList
      className="px-4 pt-3"
      data={categories}
      keyExtractor={item => item._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <HomeCategory {...item} />}
    />
  );
};

export default HomeCategories;
