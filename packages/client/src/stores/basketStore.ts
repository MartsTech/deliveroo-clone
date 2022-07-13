import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface BasketState {
  dishes: DishModel[];
}

const initialState: BasketState = {
  dishes: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasketDish: (state, action: PayloadAction<DishModel>) => {
      state.dishes = [...state.dishes, action.payload];
    },
    removeBasketDish: (state, action: PayloadAction<DishModel>) => {
      const index = state.dishes.findIndex(
        item => item._id === action.payload._id,
      );
      if (index !== -1) {
        const copy = [...state.dishes];
        copy.splice(index, 1);
        state.dishes = copy;
      }
    },
    resetBasket: state => {
      state.dishes = initialState.dishes;
    },
  },
});

export const {addBasketDish, removeBasketDish, resetBasket} =
  basketSlice.actions;

export const selectBasketDishList = (state: RootState) => state.basket.dishes;

export const selectBasketDishCount = (state: RootState, id: string) =>
  state.basket.dishes.filter(dish => dish._id === id).length;

export const selectBasketTotal = (state: RootState) =>
  state.basket.dishes.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
