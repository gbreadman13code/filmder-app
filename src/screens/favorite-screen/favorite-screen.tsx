import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useStore } from "../../services/RootStore";
import { Text } from "../../shared/components/custom-text";
import { FavoriteFilmItem } from "./favorite-film-item";

export const FavoriteScreen = observer(
  ({ navigation }: NativeStackScreenProps<any>) => {
    const { favoriteFilmsService } = useStore();

    useEffect(() => {
      favoriteFilmsService.getFavoriteFilms();
    }, []);

    console.log(!favoriteFilmsService.favoriteFilms);

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("main")}>
          <Text text={"go to main"} />
        </TouchableOpacity>

        {!favoriteFilmsService.favoriteFilms.length ? (
          <View>
            <Text text={"Упсс... Вы еще ничего не лайкнули"} />
          </View>
        ) : (
          <ScrollView>
            <View style={styles.itemsContainer}>
              {favoriteFilmsService.favoriteFilms.map((film) => (
                <FavoriteFilmItem
                  key={film.id}
                  id={film.id}
                  title={film.title}
                  poster={film.poster}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#000000",
    gap: 20,
  },
  itemsContainer: {
    gap: 10,
  },
});
