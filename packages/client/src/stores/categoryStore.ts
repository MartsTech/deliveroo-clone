import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface CategoryState {
  categories: CategoryModel[];
  initializing: boolean;
}

const initialState: CategoryState = {
  categories: [],
  initializing: true,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryList: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    setCategoryInitializing: (state, action: PayloadAction<boolean>) => {
      state.initializing = action.payload;
    },
  },
});

export const {setCategoryList, setCategoryInitializing} = categorySlice.actions;

export const selectCategoryList = (state: RootState) =>
  state.category.categories;

export const selectCategoryInitializing = (state: RootState) =>
  state.category.initializing;

export default categorySlice.reducer;
