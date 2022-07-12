import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface FeaturedState {
  featured: FeaturedModel[];
  initializing: boolean;
}

const initialState: FeaturedState = {
  featured: [],
  initializing: true,
};

export const featuredSlice = createSlice({
  name: 'featured',
  initialState,
  reducers: {
    setFeaturedList: (state, action: PayloadAction<FeaturedModel[]>) => {
      state.featured = action.payload;
    },
    setFeaturedInitializing: (state, action: PayloadAction<boolean>) => {
      state.initializing = action.payload;
    },
  },
});

export const {setFeaturedList, setFeaturedInitializing} = featuredSlice.actions;

export const selectFeaturedList = (state: RootState) => state.featured.featured;

export const selectFeaturedInitializing = (state: RootState) =>
  state.featured.initializing;

export default featuredSlice.reducer;
