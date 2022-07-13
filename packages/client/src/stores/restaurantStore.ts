import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface RestaurantState {
  selectedRestaurant: RestaurantModel | null;
}

const initialState: RestaurantState = {
  selectedRestaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setSelectedRestaurant: (state, action: PayloadAction<RestaurantModel>) => {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const {setSelectedRestaurant} = restaurantSlice.actions;

export const selectSelectedRestaurant = (state: RootState) =>
  state.restaurant.selectedRestaurant;

export default restaurantSlice.reducer;
