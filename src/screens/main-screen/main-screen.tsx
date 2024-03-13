import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { useStore } from "../../services/RootStore";
import { TFavoriteFilm } from "../../services/favorite-film-service";
import { Text } from "../../shared/components/custom-text";
import { Loader } from "../../shared/components/loader";
import { MainPageHeader } from "../../shared/components/main-page-header";
import { NotFoundModal } from "../../shared/components/not-found-modal";
import { CalendarIcon } from "../../shared/icons/calendar";
import { ClockIcon } from "../../shared/icons/clock";
import { RatingStarIcon } from "../../shared/icons/rating-star";
import { formateTime } from "../../shared/utils/formate-time";

export const MainScreen = observer(
  ({ navigation }: NativeStackScreenProps<any>) => {
    const { filmService, favoriteFilmsService, searchSettingsService } =
      useStore();

    const handleLikeClick = () => {
      if (!filmService.film) return;

      const filmData: TFavoriteFilm = {
        id: filmService.film.id,
        poster: filmService.film.poster.url,
        title: filmService.film.name,
      };

      favoriteFilmsService.addFilmToFavorite(filmData);
    };

    const logFilms = async () => {
      console.log(favoriteFilmsService.favoriteFilms);
    };

    const clear = async () => {
      await AsyncStorage.clear();
    };

    useEffect(() => {
      if (filmService.film === null) {
        filmService.getFilm(searchSettingsService);
      }
    }, []);

    const { width } = useWindowDimensions();

    if (filmService.loading)
      return (
        <View style={styles.wrapper}>
          <Loader />
        </View>
      );

    console.log(filmService.film?.description);

    return (
      <View style={styles.wrapper}>
        <MainPageHeader
          onSettingsClick={() => navigation.navigate("search-params")}
          onFavoriteClick={() => navigation.navigate("favorite")}
        />
        <ScrollView style={styles.scrolledContainer}>
          <View style={styles.scrollView}>
            <Image
              width={200}
              height={300}
              style={styles.poster}
              source={{
                uri: filmService.film?.poster.url,
              }}
            />

            <View style={[styles.backgroundPosterWrapper, { width: width }]}>
              <Image
                blurRadius={30}
                style={styles.backgroundPoster}
                source={{
                  uri: filmService.film?.poster.url,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Button
                title="Next"
                onPress={() => filmService.getFilm(searchSettingsService)}
              />
              <Button title="Like" onPress={handleLikeClick} />
              <Button title="Log" onPress={logFilms} />
              <Button title="Clear" onPress={clear} />
            </View>
            <Text
              text={filmService.film?.name}
              fontSize={25}
              align="center"
              fontWeight="bold"
            />
            <View style={styles.additionalInfo}>
              <View style={styles.detailsWrapper}>
                <CalendarIcon width={30} />
                <Text text={filmService.film?.year} fontSize={15} />
              </View>
              <View style={styles.detailsWrapper}>
                <RatingStarIcon width={30} />
                <Text text={filmService.film?.rating.imdb} fontSize={15} />
              </View>
              <View style={styles.detailsWrapper}>
                <ClockIcon width={30} />
                <Text
                  text={formateTime(filmService.film?.movieLength || 0)}
                  fontSize={15}
                />
              </View>
            </View>
            <View style={styles.additionalInfo}>
              {filmService.film?.genres.map((genre, index) => (
                <Text key={index} text={genre.name} />
              ))}
            </View>
            <View style={styles.descriptionBlock}>
              <Text
                fontSize={17}
                text={
                  filmService.film?.description ||
                  filmService.film?.shortDescription
                }
              />
            </View>
          </View>
        </ScrollView>
        {filmService.notFound && (
          <NotFoundModal
            navigate={() => {
              filmService.turnNotFoundOff();
              navigation.navigate("search-params");
            }}
          />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#000000",
  },
  scrolledContainer: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  poster: {
    marginTop: 67,
  },
  backgroundPosterWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 367,

    zIndex: -1,
  },
  backgroundPoster: {
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 20,
  },
  additionalInfo: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  detailsWrapper: {
    flexDirection: "row",
  },
  descriptionBlock: {
    marginTop: 20,
  },
});
