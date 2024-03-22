import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";
import { FIREBASE_AUTH } from "../../../firebase.config";
import { useStore } from "../../services/RootStore";
import { Text } from "../../shared/components/custom-text";
import { SearchSettingItem } from "../../shared/components/search-setting-item";
import { SettingsPageHeader } from "../../shared/components/settings-page-header";
import { genreList, rating, yearsList } from "../../shared/consts/consts";

export const SearchParamsScreen = observer(
  ({ navigation }: NativeStackScreenProps<any>) => {
    const { searchSettingsService } = useStore();
    const [isYearsInterval, setYearsInterval] = useState<boolean>(false);

    useEffect(() => {
      if (searchSettingsService.settings.yearsEnd) {
        setYearsInterval(true);
      }
    }, [searchSettingsService.settings.yearsEnd]);

    const settings = searchSettingsService.settings;

    return (
      <View style={styles.wrapper}>
        <SettingsPageHeader
          onBackClick={() => navigation.navigate("main")}
          onSaveClick={() => navigation.navigate("main")}
        />
        <SearchSettingItem
          text="Жанр"
          controller={
            <RNPickerSelect
              items={genreList}
              style={pickerStyles}
              value={settings?.genre}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange("genre", value)
              }
            />
          }
        />
        <SearchSettingItem
          text="Рейтинг на Кинопоиск"
          controller={
            <RNPickerSelect
              items={[...rating].reverse()}
              style={pickerStyles}
              value={settings?.kinopoiskRating}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange("kinopoiskRating", value)
              }
            />
          }
        />
        <SearchSettingItem
          text={isYearsInterval ? "Год выпуска: начало" : "Год выпуска"}
          controller={
            <RNPickerSelect
              style={pickerStyles}
              items={yearsList}
              value={settings?.yearStart}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange("yearStart", value)
              }
            />
          }
        />
        {isYearsInterval && (
          <View>
            <SearchSettingItem
              text="Год выпуска: конец"
              controller={
                <RNPickerSelect
                  style={pickerStyles}
                  items={yearsList}
                  value={settings.yearsEnd}
                  onValueChange={(value) =>
                    searchSettingsService.onSettingsChange("yearsEnd", value)
                  }
                />
              }
              additionalNode={
                <TouchableOpacity onPress={() => setYearsInterval(false)}>
                  <Text text={"x"} />
                </TouchableOpacity>
              }
            />
          </View>
        )}
        {!isYearsInterval && (
          <Button
            title={isYearsInterval ? "удалить интервал" : "задать интервал"}
            onPress={() => setYearsInterval(true)}
          />
        )}

        <Text text={"Расширенные настройки"} fontSize={20} fontWeight="bold" />
        <Text
          text={
            "Внимание: отключение фильтров может ускорить время запроса, но предоставить не все данные о фильме"
          }
        />
        <SearchSettingItem
          text="Показывать постер"
          controller={
            <Switch
              value={settings.isShowPoster}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange("isShowPoster", value)
              }
            />
          }
        />
        <SearchSettingItem
          text="Показывать описание"
          controller={
            <Switch
              value={settings.isShowDescription}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange(
                  "isShowDescription",
                  value
                )
              }
            />
          }
        />
        <SearchSettingItem
          text="Показывать продолжительность фильма"
          controller={
            <Switch
              value={settings.isShowDuration}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange("isShowDuration", value)
              }
            />
          }
        />
        <SearchSettingItem
          text="Показывать год премьеры"
          controller={
            <Switch
              value={settings.isShowPremiereDate}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange(
                  "isShowPremiereDate",
                  value
                )
              }
            />
          }
        />
        <SearchSettingItem
          text="Показывать рейтинг"
          controller={
            <Switch
              value={settings.isShowRating}
              onValueChange={(value) =>
                searchSettingsService.onSettingsChange("isShowRating", value)
              }
            />
          }
        />
        <Button title="Выйти" onPress={() => FIREBASE_AUTH.signOut()} />
      </View>
    );
  }
);

const pickerStyles: PickerStyle = {
  chevronContainer: {
    display: "none",
  },
  inputIOS: {
    color: "#ffffff",
    fontSize: 17,
  },
  inputAndroid: {
    color: "#ffffff",
    fontSize: 17,
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 10,
  },
});
