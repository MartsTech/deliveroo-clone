import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import RestaurantModule from '../modules/restaurant';
import type {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

const RestaurantScreen: React.FC<Props> = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return <RestaurantModule restaurant={route.params.restaurant} />;
};

export default RestaurantScreen;
