import AsyncStorage from "@react-native-async-storage/async-storage";
import { flow, makeObservable, observable } from "mobx";

export type TFavoriteFilm = {
  id: number;
  title: string;
  poster: string;
};

export class FavoriteFilmsService {
  @observable favoriteFilms: TFavoriteFilm[] = [];

  constructor() {
    makeObservable(this);
  }

  @flow.bound
  async *addFilmToFavorite(film: TFavoriteFilm) {
    const favorites = await AsyncStorage.getItem("favorites");

    yield;

    if (!favorites) {
      await AsyncStorage.setItem("favorites", JSON.stringify([film]));
      yield;

      this.getFavoriteFilms();

      return;
    }

    const parsedFavorites = JSON.parse(favorites);

    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify([...parsedFavorites, film])
    );

    this.getFavoriteFilms();
  }

  @flow.bound
  async *getFavoriteFilms(): Promise<void> {
    try {
      const favorites = await AsyncStorage.getItem("favorites");

      yield;

      if (!favorites) {
        this.favoriteFilms = [];
        return;
      }

      this.favoriteFilms = JSON.parse(favorites);
    } catch (error) {
      console.error(error);
    }
  }

  init() {
    this.getFavoriteFilms();
  }
}
