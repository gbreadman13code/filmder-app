import { TFilm, TRawFilm } from "../../services/types";

export const fromRawFilmData = (film: TRawFilm): TFilm => {
  const {
    status,
    externalId,
    rating,
    backdrop,
    movieLength,
    images,
    spokenLanguages,
    id,
    type,
    name,
    description,
    premiere,
    slogan,
    year,
    budget,
    poster,
    genres,
    countries,
    shortDescription,
    ageRating,
  } = film;

  return {
    status,
    externalId,
    rating,
    backdrop,
    movieLength,
    images,
    spokenLanguages,
    id,
    type,
    name,
    description,
    premiere,
    slogan,
    year,
    budget,
    poster,
    genres,
    countries,
    shortDescription,
    ageRating,
  };
};
