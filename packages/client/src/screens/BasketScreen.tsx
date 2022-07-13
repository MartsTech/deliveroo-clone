import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import BasketModule from '../modules/basket';
import type {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Basket'>;

const BasketScreen: React.FC<Props> = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      presentation: 'modal',
    });
  }, [navigation]);

  return (
    <>
      <BasketModule />
      <StatusBar style="dark" />
    </>
  );
};

export default BasketScreen;
