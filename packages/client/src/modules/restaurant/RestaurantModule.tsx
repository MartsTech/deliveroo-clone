import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  selectBasketDishList,
  selectBasketTotal,
} from '../../stores/basketStore';
import {useAppSelector} from '../../stores/store';
import {urlFor} from '../../utils/sanity';
import RestaurantBasket from './components/basket';
import RestaurantDescription from './components/description';
import RestaurantDish from './components/dish';
import RestaurantHeader from './components/header';
import RestaurantOption from './components/option';

interface Props {
  restaurant: RestaurantModel;
}

const RestaurantModule: React.FC<Props> = ({
  restaurant: {image, title, rating, category, address, description, dishes},
}) => {
  const items = useAppSelector(selectBasketDishList);
  const total = useAppSelector(selectBasketTotal);

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
      <RestaurantBasket itemsCount={items.length} totalPrice={total} />
    </>
  );
};

export default RestaurantModule;
