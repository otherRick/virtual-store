import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';

import {
  FormattedCharacters,
  Info,
  getCharacters,
} from '../services/getCharacters';

export interface HomeSliceData extends FormattedCharacters {
  price: string;
}

export interface getCharactersThunkPayload {
  page: number;
}

export interface HomeSliceInitialState {
  charaters: HomeSliceData[];
  info: Info;
  controls: {
    status: 'PENDING' | 'FULLFILED' | 'REJECTED' | null;
    message: string | null;
  };
}

const initialState: HomeSliceInitialState = {
  charaters: [],
  info: {
    pages: 0,
    next: null,
    prev: null,
  },
  controls: {
    status: null,
    message: null,
  },
};

export const getCharactersThunk = createAsyncThunk(
  'home-slice/get-characters',
  async (payload: getCharactersThunkPayload, { rejectWithValue }) => {
    try {
      const { data } = await getCharacters(payload.page);
      const formattedCharacters = data.results.map(character => ({
        id: character.id,
        status: character.status,
        gender: character.gender,
        image: character.image,
        name: character.name,
        species: character.species,
        price: Math.floor(Math.random() * 100 + 2).toFixed(2),
      }));

      return { characters: formattedCharacters, info: data.info };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const homeSlice = createSlice({
  initialState,
  name: 'home-slice',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCharactersThunk.fulfilled, (state, action) => {
      action.payload.characters.forEach(character =>
        state.charaters.push(character),
      );

      state.info = action.payload.info;

      state.controls.status = 'FULLFILED';
    });

    builder.addCase(getCharactersThunk.pending, state => {
      state.controls.status = 'PENDING';
    });

    builder.addCase(getCharactersThunk.rejected, (state, action) => {
      const { message } = action.payload as { message: string };

      state.controls = {
        status: 'REJECTED',
        message,
      };
    });
  },
});
