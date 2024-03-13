import { action, flow, makeObservable, observable } from "mobx";
import { getFilm } from "../api/get-film";
import { fromRawFilmData } from "../shared/serializers/film-serializer";
import { SearchSettingsService } from "./search-settings-service";
import { TFilm } from "./types";

export class FilmService {
  @observable loading: boolean = false;
  @observable notFound: boolean = false;
  @observable film: TFilm | null = null;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  turnNotFoundOff() {
    this.notFound = false;
  }

  @flow.bound
  async *getFilm(settingsService: SearchSettingsService) {
    try {
      this.loading = true;
      const film = await getFilm(settingsService.settings);
      yield;

      if (film === null) {
        this.notFound = true;

        return;
      }

      this.film = fromRawFilmData(film);
    } catch (error) {
      yield;
      console.error(error);
    } finally {
      yield;
      this.loading = false;
    }
  }
}
