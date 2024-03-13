import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./custom-text";

type Props = {
  onSettingsClick(): void;
  onFavoriteClick(): void;
};

export const MainPageHeader = ({ onSettingsClick, onFavoriteClick }: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onSettingsClick} style={styles.button}>
        {/* <SearchSettingsIcon /> */}
        <Text text="Настройки" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onFavoriteClick} style={styles.button}>
        {/* <FavoriteIcon width={25} height={25} fill={"red"} color={"red"} /> */}
        <Text text="Избранное" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "yellow",
    padding: 7,
  },
});
