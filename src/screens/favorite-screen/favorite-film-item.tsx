import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "../../shared/components/custom-text";

type Props = {
  id: number;
  title: string;
  poster: string;
};

export const FavoriteFilmItem = ({ id, title, poster }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Image
        width={200}
        height={300}
        style={styles.poster}
        source={{
          uri: poster,
        }}
      />
      <Text text={title} fontSize={17} fontWeight="bold" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  poster: {
    width: 60,
    height: 85,
  },
});
