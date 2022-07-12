import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import HomeModule from '../modules/home';
import CategoryProvider from '../providers/category';
import type {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <CategoryProvider>
      <HomeModule />
      <StatusBar style="dark" />
    </CategoryProvider>
  );
};

export default HomeScreen;
