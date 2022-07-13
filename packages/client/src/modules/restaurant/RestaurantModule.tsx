import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  resetBasket,
  selectBasketDishList,
  selectBasketTotal,
} from '../../stores/basketStore';
import {
  selectSelectedRestaurant,
  setSelectedRestaurant,
} from '../../stores/restaurantStore';
import {useAppDispatch, useAppSelector} from '../../stores/store';
import {urlFor} from '../../utils/sanity';
import RestaurantBasket from './components/basket';
import RestaurantDescription from './components/description';
import RestaurantDish from './components/dish';
import RestaurantHeader from './components/header';
import RestaurantOption from './components/option';

interface Props {
  restaurant: RestaurantModel;
}

const RestaurantModule: React.FC<Props> = ({restaurant}) => {
  const {image, title, rating, category, address, description, dishes} =
    restaurant;

  const items = useAppSelector(selectBasketDishList);
  const total = useAppSelector(selectBasketTotal);
  const selectedRestaurant = useAppSelector(selectSelectedRestaurant);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedRestaurant?._id !== restaurant._id) {
      dispatch(resetBasket());
    }
    dispatch(setSelectedRestaurant(restaurant));
  }, [restaurant, selectedRestaurant, dispatch]);

  return (
    <>
      <ScrollView>
        <RestaurantHeader url={urlFor(image).url()} />
        <View className="bg-white">
          <RestaurantDescription
            title={title}
            description={description}
            rating={rating}
            address={address}
            category={category.title}
          />
          <RestaurantOption title="Have a food allergy?" />
        </View>
        <View className="pb-28">
          <Text className="mb-3 px-4 pt-6 text-xl font-bold">Menu</Text>
          {dishes.map(dish => (
            <RestaurantDish key={dish._id} dish={dish} />
          ))}
        </View>
      </ScrollView>
      {items.length > 0 && (
        <RestaurantBasket itemsCount={items.length} totalPrice={total} />
      )}
    </>
  );
};

export default RestaurantModule;
