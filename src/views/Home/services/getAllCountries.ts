import { instance } from '../../../services';
import { GetAllCountriesReturn } from './getAllCountriesType';

export const getAllCountries = (): Promise<GetAllCountriesReturn> =>
  instance.get('/all');
