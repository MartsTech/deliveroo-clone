import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import DeliveryModule from '../modules/delivery';
import type {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Delivery'>;

const DeliveryScreen: React.FC<Props> = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <>
      <DeliveryModule />
      <StatusBar style="light" />
    </>
  );
};

export default DeliveryScreen;
