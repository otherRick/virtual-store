import { createSlice } from '@reduxjs/toolkit';
import { FormattedCharacters } from '../../Home/services/getCharacters';
import { HomeSliceData } from '../../Home/slice/homeSlice';

export interface InicialStateData extends FormattedCharacters {
  quantity: number;
  price: string;
}

export interface Action {
  type: string;
  payload: HomeSliceData;
}

export interface CartSliceInicialState {
  characters: InicialStateData[];
  controls: {
    state: null;
    message: null;
  };
}
const initialState: CartSliceInicialState = {
  characters: [],
  controls: {
    state: null,
    message: null,
  },
};

const removeCharacter = (characters: InicialStateData[], action: Action) => {
  const filteredCharacter = characters.filter(
    character => character.id !== action.payload.id,
  );

  return filteredCharacter;
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart-slice',
  reducers: {
    addCharacter(state, action: Action) {
      const foundCharacterIndex = state.characters.findIndex(
        character => character.id === action.payload.id,
      );

      if (foundCharacterIndex !== -1) {
        const product = state.characters[foundCharacterIndex];

        product.quantity = product.quantity + 1;
        return;
      }

      state.characters.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeCharacterQuantity(state, action: Action) {
      const foundCharacterIndex = state.characters.findIndex(
        character => character.id === action.payload.id,
      );

      if (foundCharacterIndex !== -1) {
        const character = state.characters[foundCharacterIndex];

        if (character.quantity <= 1) {
          state.characters = removeCharacter(state.characters, action);
        }

        character.quantity = character.quantity - 1;
      }
    },
    romoveCharacter(state, action: Action) {
      state.characters = removeCharacter(state.characters, action);
    },
    removeAllCharacters(state) {
      state.characters = [];
    },
  },
});

export const {
  addCharacter,
  removeAllCharacters,
  removeCharacterQuantity,
  romoveCharacter,
} = cartSlice.actions;
