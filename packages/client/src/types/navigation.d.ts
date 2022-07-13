import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Restaurant: {restaurant: RestaurantModel};
  Basket: undefined;
  Ordering: undefined;
  Delivery: undefined;
};

type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
