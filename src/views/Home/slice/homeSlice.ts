import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCountries } from '../services/getAllCountries';
import { Country } from '../services/getAllCountriesType';

export interface HomeSliceInitialState {
  data: Country[];
  controls: {
    status: 'PENDING' | 'FULLFILED' | 'REJECTED' | null;
    message: string | null;
  };
}

const initialState: HomeSliceInitialState = {
  data: [],
  controls: {
    status: null,
    message: null,
  },
};

export const getAllCountriesThunk = createAsyncThunk(
  'home-slice/get-all-countries',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await getAllCountries();

      return res.data;
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
    builder.addCase(getAllCountriesThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.controls.status = 'FULLFILED';
    });

    builder.addCase(getAllCountriesThunk.pending, state => {
      state.controls.status = 'PENDING';
    });

    builder.addCase(getAllCountriesThunk.rejected, (state, action) => {
      const { message } = action.payload as { message: string };

      state.controls = {
        status: 'REJECTED',
        message,
      };
    });
  },
});
