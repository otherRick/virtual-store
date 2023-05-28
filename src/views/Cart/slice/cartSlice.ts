import { createSlice } from '@reduxjs/toolkit';
import { FormattedCountryData } from '../../Home/services/getAllCountriesType';

export interface InicialStateData extends FormattedCountryData {
  quantity: number;
}

export interface Action {
  type: string;
  payload: FormattedCountryData;
}

export interface CartSliceInicialState {
  data: InicialStateData[];
  controls: {
    state: null;
    message: null;
  };
}
const initialState: CartSliceInicialState = {
  data: [],
  controls: {
    state: null,
    message: null,
  },
};

const removeProduct = (products: InicialStateData[], action: Action) => {
  const filteredProducts = products.filter(
    item => item.countryId !== action.payload.countryId,
  );

  return filteredProducts;
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart-slice',
  reducers: {
    addProduct(state, action: Action) {
      const foundProductIndex = state.data.findIndex(
        product => product.countryId === action.payload.countryId,
      );

      if (foundProductIndex !== -1) {
        const product = state.data[foundProductIndex];

        product.quantity = product.quantity + 1;
        return;
      }

      state.data.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeProductQuantity(state, action: Action) {
      const foundProductIndex = state.data.findIndex(
        product => product.countryId === action.payload.countryId,
      );

      if (foundProductIndex !== -1) {
        const product = state.data[foundProductIndex];

        if (product.quantity <= 1) {
          state.data = removeProduct(state.data, action);
        }

        product.quantity = product.quantity - 1;
      }
    },
    romoveProducts(state, action: Action) {
      state.data = removeProduct(state.data, action);
    },
    removeAllProdcuts(state) {
      state.data = [];
    },
  },
});

export const {
  addProduct,
  removeAllProdcuts,
  removeProductQuantity,
  romoveProducts,
} = cartSlice.actions;
