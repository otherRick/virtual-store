import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { getAllCountries } from '../services/getAllCountries';
import { FormattedCountryData } from '../services/getAllCountriesType';

export interface HomeSliceInitialState {
  data: FormattedCountryData[];
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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllCountries();

      const formattedData = data.map(
        ({
          languages,
          area,
          capital,
          flags,
          name: { common },
          translations,
        }) => {
          const countryId = uuidv4();
          let languageAcronymList = null;
          let formattedCountryName = '';
          let countrySpokenLanguages = '';

          if (languages) {
            languageAcronymList = Object.keys(languages);

            const nativeCountryName =
              translations[languageAcronymList[0] as keyof typeof translations];

            if (nativeCountryName?.common) {
              const existNativeCountryName =
                common === nativeCountryName?.common;

              formattedCountryName = existNativeCountryName
                ? common
                : `${common} | ${nativeCountryName?.common}`;
            } else {
              formattedCountryName = common;
            }

            countrySpokenLanguages = languages
              ? languageAcronymList
                  .map((acronym, index) => {
                    return `${languages[acronym as keyof typeof languages]}${
                      index === languageAcronymList.length - 1 ? '' : ', '
                    }`;
                  })
                  .join('')
              : '';
          }

          const countryCapital = capital ? capital[0] : '';

          const countryCardPrice = (Math.random() * 500 + 500)
            .toFixed(2)
            .replace('.', ',');

          return {
            countryArea: area,
            countryFlag: {
              alt: flags.alt,
              image: flags.png,
            },
            countryName: common,
            formattedCountryName,
            countryCapital,
            countrySpokenLanguages,
            countryCardPrice,
            countryId,
          };
        },
      );

      return formattedData;
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
