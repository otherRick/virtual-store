import { configureStore } from '@reduxjs/toolkit';
import {
  homeSlice,
  HomeSliceInitialState,
} from '../views/Home/slice/homeSlice';
import {
  cartSlice,
  CartSliceInicialState,
} from '../views/Cart/slice/cartSlice';

export interface Store {
  homeReducer: HomeSliceInitialState;
  cartReducer: CartSliceInicialState;
}

export const store = configureStore({
  reducer: {
    homeReducer: homeSlice.reducer,
    cartReducer: cartSlice.reducer,
  },
});
