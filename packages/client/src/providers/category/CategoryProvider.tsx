import React, {useEffect} from 'react';
import {
  selectCategoryInitializing,
  setCategoryInitializing,
  setCategoryList,
} from '../../stores/categoryStore';
import {useAppDispatch, useAppSelector} from '../../stores/store';
import fetchCategoryList from '../../utils/categories/fetchCategoryList';

const CategoryProvider: React.FC = ({children}) => {
  const initializing = useAppSelector(selectCategoryInitializing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (initializing) {
      fetchCategoryList().then(data => {
        dispatch(setCategoryList(data));
        dispatch(setCategoryInitializing(false));
      });
    }
  }, [initializing, dispatch]);

  return <>{children}</>;
};

export default CategoryProvider;
