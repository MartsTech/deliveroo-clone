import React, {useEffect} from 'react';
import {
  selectFeaturedInitializing,
  setFeaturedInitializing,
  setFeaturedList,
} from '../../stores/featuredStore';
import {useAppDispatch, useAppSelector} from '../../stores/store';
import fetchFeaturedList from '../../utils/featured/fetchFeaturedList';

const FeaturedProvider: React.FC = ({children}) => {
  const initializing = useAppSelector(selectFeaturedInitializing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (initializing) {
      fetchFeaturedList().then(data => {
        dispatch(setFeaturedList(data));
        dispatch(setFeaturedInitializing(false));
      });
    }
  }, [initializing, dispatch]);

  return <>{children}</>;
};

export default FeaturedProvider;
