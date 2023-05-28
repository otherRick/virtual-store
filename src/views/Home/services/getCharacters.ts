import { instance } from '../../../services';

export interface Info {
  count?: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  data: {
    info: Info;
    results: Result[];
  };
}

export interface FormattedCharacters
  extends Omit<
    Result,
    'created' | 'url' | 'episode' | 'location' | 'origin' | 'type'
  > {}

export const getCharacters = (page: number): Promise<ApiResponse> =>
  instance.get(`/character/?page=${page}`);
