export type TRawFilm = {
  status: any;
  externalId: ExternalId;
  rating: Rating;
  votes: Votes;
  backdrop: Backdrop;
  movieLength: number;
  images: Images;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  distributors: Distributors;
  premiere: Premiere;
  slogan: string;
  year: number;
  budget: Budget;
  poster: Poster;
  facts: Fact[];
  genres: Genre[];
  countries: Country[];
  seasonsInfo: any[];
  persons: Person[];
  lists: string[];
  typeNumber: number;
  alternativeName: string;
  enName: any;
  names: Name[];
  updatedAt: string;
  imagesInfo: ImagesInfo;
  similarMovies: SimilarMovy[];
  ratingMpaa: string;
  shortDescription: string;
  technology: Technology;
  ticketsOnSale: boolean;
  sequelsAndPrequels: any[];
  ageRating: number;
  logo: Logo;
  watchability: Watchability;
  top10: any;
  top250: number;
  audience: Audience[];
  deletedAt: any;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
  networks: any;
  videos: Videos;
};

export type TFilm = {
  status: any;
  externalId: ExternalId;
  rating: Rating;
  backdrop: Backdrop;
  movieLength: number;
  images: Images;
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  premiere: Premiere;
  slogan: string;
  year: number;
  budget: Budget;
  poster: Poster;
  genres: Genre[];
  countries: Country[];
  shortDescription: string;
  ageRating: number;
};

export interface World {
  value: number;
  currency: string;
}

export interface Russia {
  value: number;
  currency: string;
}

export interface Usa {
  value: number;
  currency: string;
}

export interface ExternalId {
  imdb: string;
  tmdb: number;
  kpHD: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface ProductionCompany {
  name: string;
  url?: string;
  previewUrl?: string;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Distributors {
  distributor: string;
  distributorRelease: string;
}

export interface Premiere {
  world: string;
  russia: string;
  bluray: string;
  dvd: string;
}

export interface Budget {
  value: number;
  currency: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Person {
  id: number;
  photo: string;
  name?: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface ImagesInfo {
  framesCount: number;
}

export interface SimilarMovy {
  id: number;
  name: string;
  enName: any;
  alternativeName: string;
  type: string;
  poster: Poster2;
  year: number;
  rating: Rating2;
}

export interface Poster2 {
  url: string;
  previewUrl: string;
}

export interface Rating2 {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Technology {
  hasImax: boolean;
  has3D: boolean;
}

export interface Logo {
  url: string;
}

export interface Watchability {
  items: any[];
}

export interface Audience {
  count: number;
  country: string;
}

export interface Videos {
  trailers: Trailer[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}
