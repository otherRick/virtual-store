import { configureStore } from '@reduxjs/toolkit';
import {
  homeSlice,
  HomeSliceInitialState,
} from '../views/Home/slice/homeSlice';

export interface Store {
  homeReducer: HomeSliceInitialState;
}

export const store = configureStore({
  reducer: {
    homeReducer: homeSlice.reducer,
  },
});
