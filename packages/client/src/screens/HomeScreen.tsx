import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import HomeModule from '../modules/home';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return <HomeModule />;
};

export default HomeScreen;
