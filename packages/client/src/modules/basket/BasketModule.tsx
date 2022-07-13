import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  removeBasketDish,
  selectBasketDishList,
  selectBasketTotal,
} from '../../stores/basketStore';
import {selectSelectedRestaurant} from '../../stores/restaurantStore';
import {useAppDispatch, useAppSelector} from '../../stores/store';
import type {RootNavigationProps} from '../../types/navigation';
import BasketDeliver from './components/deliver';
import BasketHeader from './components/header';
import BasketItem from './components/item';
import BasketOrder from './components/order';

const BasketModule = () => {
  const items = useAppSelector(selectBasketDishList);
  const restaurant = useAppSelector(selectSelectedRestaurant);
  const total = useAppSelector(selectBasketTotal);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();

  const results = useMemo(
    () =>
      items.reduce((groups, item) => {
        // @ts-ignore
        (groups[item._id] = groups[item._id] || []).push(item);
        return groups;
      }, {}) as {[id: string]: DishModel[]},
    [items],
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <BasketHeader title={restaurant?.title || ''} />
        <BasketDeliver />
        <FlatList
          data={Object.entries(results)}
          keyExtractor={item => item[0]}
          renderItem={({item}) => (
            <BasketItem
              quantity={item[1].length}
              item={item[1][0]}
              onRemove={() => dispatch(removeBasketDish(item[1][0]))}
            />
          )}
        />
        <BasketOrder
          total={total}
          fee={5.99}
          onOrder={() => navigation.replace('Ordering')}
        />
      </View>
    </SafeAreaView>
  );
};

export default BasketModule;
