import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Restaurant: {restaurant: RestaurantModel};
};

type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
