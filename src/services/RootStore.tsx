import { ReactNode, createContext, useContext } from "react";
import { FavoriteFilmsService } from "./favorite-film-service";
import { FilmService } from "./film-service";
import { SearchSettingsService } from "./search-settings-service";
import { UserService } from "./user-service";

export class RootStore {
  userService = new UserService();
  filmService = new FilmService();
  searchSettingsService = new SearchSettingsService();
  favoriteFilmsService = new FavoriteFilmsService();
}

const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider: React.FC<{
  store: RootStore;
  children: ReactNode;
}> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): RootStore => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return store;
};
