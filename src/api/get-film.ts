import axios from "axios";
import { TSettings } from "../services/search-settings-service";
import { TRawFilm } from "../services/types";
import { BASE_URL, X_API_KEY } from "./consts";
let qs = require("qs");

export const getFilm = async (settings: TSettings): Promise<TRawFilm> => {
  try {
    const notNullFieldsParams = [];

    if (settings.isShowDescription)
      notNullFieldsParams.push("notNullFields=description");
    if (settings.isShowDuration)
      notNullFieldsParams.push("notNullFields=movieLength");
    if (settings.isShowPoster)
      notNullFieldsParams.push("notNullFields=poster.url");
    if (settings.isShowPremiereDate)
      notNullFieldsParams.push("notNullFields=year");
    if (settings.isShowRating)
      notNullFieldsParams.push("notNullFields=rating.imdb");

    notNullFieldsParams.push("notNullFields=shortDescription");

    const notNullFields = notNullFieldsParams
      .map((field, index) => {
        if (index === 0) {
          return "?" + field;
        } else {
          return field;
        }
      })
      .join("&");

    const response = await axios.get<TRawFilm>(
      `${BASE_URL}v1.4/movie/random${notNullFields}`,
      {
        headers: {
          Accept: "application/json",
          "X-API-KEY": X_API_KEY,
        },
        params: {
          "genres.name": settings.genre,
          "rating.kp": `${settings.kinopoiskRating}-10`,
          year: settings.yearsEnd
            ? `${settings.yearStart}-${settings.yearsEnd}`
            : settings.yearStart,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw Error();
  }
};
