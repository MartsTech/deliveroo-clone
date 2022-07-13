import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {RootNavigationProps} from '../../types/navigation';

const OrderingModule = () => {
  const navigation = useNavigation<RootNavigationProps>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Basket');
    }, 4000);
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <Animatable.Image
        className="h-96 w-96"
        source={require('../../../assets/images/ordering.gif')}
        iterationCount={1}
        animation="slideInUp"
      />
      <Animatable.Text
        className="my-10 text-center text-lg font-bold text-white"
        iterationCount={1}
        animation="slideInUp">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default OrderingModule;
