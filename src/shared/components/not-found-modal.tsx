import React from "react";
import { Button, StyleSheet, View, useWindowDimensions } from "react-native";
import { Text } from "./custom-text";

type Props = {
  navigate(): void;
};

export const NotFoundModal = ({ navigate }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.wrapper, { width: width }]}>
      <View style={styles.modal}>
        <Text
          align="center"
          text="Мы не нашли ничего с вашими параметрами. Попробуйте изменить расширенные настроки."
        />
        <Button title="Перейти в настройки" onPress={navigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#000000",

    alignItems: "center",
    justifyContent: "center",

    zIndex: 1000,
  },
  modal: {
    padding: 20,
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "yellow",
    gap: 10,
  },
});
