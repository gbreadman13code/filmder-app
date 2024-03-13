import { action, makeObservable, observable } from "mobx";

export type TSettings = {
  genre?: string;
  kinopoiskRating?: number;
  yearStart?: string;
  yearsEnd?: string;
  isShowPoster?: boolean;
  isShowDescription?: boolean;
  isShowDuration?: boolean;
  isShowPremiereDate?: boolean;
  isShowRating?: boolean;
};

export class SearchSettingsService {
  @observable settings: TSettings = {
    yearStart: "1990",
    yearsEnd: "2024",
    kinopoiskRating: 1,
    isShowPoster: true,
    isShowDescription: true,
    isShowDuration: true,
    isShowPremiereDate: true,
    isShowRating: true,
  };
  @observable hasChanges: boolean = false;
  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  onSettingsChange(settingName: keyof TSettings, value: boolean) {
    const changedSettings = { ...this.settings, [settingName]: value };

    this.settings = changedSettings;
    this.hasChanges = true;
  }

  @action.bound
  onSaveChangesClick() {
    if (this.hasChanges) this.hasChanges = false;
  }
}
