import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import OrderingModule from '../modules/ordering';
import type {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Ordering'>;

const OrderingScreen: React.FC<Props> = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      presentation: 'fullScreenModal',
    });
  }, [navigation]);

  return (
    <>
      <OrderingModule />
      <StatusBar style="light" />
    </>
  );
};

export default OrderingScreen;
