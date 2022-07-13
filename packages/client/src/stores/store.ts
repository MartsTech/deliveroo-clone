import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import basketReducer from './basketStore';
import categoryReducer from './categoryStore';
import featuredReducer from './featuredStore';
import restaurantReducer from './restaurantStore';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    featured: featuredReducer,
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
