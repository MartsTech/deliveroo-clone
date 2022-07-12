import React from 'react';
import Currency from 'react-currency-formatter';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  addBasketDish,
  removeBasketDish,
  selectBasketDishCount,
} from '../../../../stores/basketStore';
import {useAppSelector} from '../../../../stores/store';
import {urlFor} from '../../../../utils/sanity';
import RestaurantDishQuality from './components/Quality';

interface Props {
  dish: DishModel;
}

const RestaurantDish: React.FC<Props> = ({dish}) => {
  const {_id, title, description, price, image} = dish;
  const count = useAppSelector(state => selectBasketDishCount(state, _id));
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity
        className={`border border-gray-200 bg-white p-4 ${
          count > 0 && 'border-b-0'
        }`}
        onPress={() => count === 0 && dispatch(addBasketDish(dish))}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg">{title}</Text>
            <Text className="text-justify text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">
              <Currency quantity={price} currency="EUR" />
            </Text>
          </View>
          <View>
            <Image
              className="h-20 w-20 bg-gray-300 p-4"
              source={{uri: urlFor(image).url()}}
            />
          </View>
        </View>
      </TouchableOpacity>
      {count > 0 && (
        <RestaurantDishQuality
          count={count}
          onAdd={() => dispatch(addBasketDish(dish))}
          onRemove={() => dispatch(removeBasketDish(dish))}
        />
      )}
    </>
  );
};

export default RestaurantDish;
