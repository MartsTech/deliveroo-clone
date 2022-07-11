import React from 'react';
import {TextInput, View} from 'react-native';
import {AdjustmentsIcon, SearchIcon} from 'react-native-heroicons/outline';
import colors from '../../constants/colors';

const Search = () => {
  return (
    <View className="mx-4 flex-row items-center space-x-3 pb-2">
      <View className="flex-1 flex-row items-center space-x-4 bg-gray-200 p-3">
        <SearchIcon color="gray" size={20} />
        <TextInput
          placeholder="Restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsIcon color={colors.primary} />
    </View>
  );
};

export default Search;
