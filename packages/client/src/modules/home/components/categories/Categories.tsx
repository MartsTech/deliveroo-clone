import React, {useState} from 'react';
import {FlatList} from 'react-native';
import HomeCategory from './components/Category';

const HomeCategories = () => {
  const [categories] = useState(['One', 'Two', 'Three', 'Four', 'Five', 'Six']);

  return (
    <FlatList
      className="px-4 pt-3"
      data={categories}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <HomeCategory
          title={item}
          source={require('../../../../../assets/images/avatar.png')}
        />
      )}
    />
  );
};

export default HomeCategories;
