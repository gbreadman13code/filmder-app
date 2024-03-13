import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./custom-text";

export const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        autoPlay
        style={styles.loader}
        source={require("../lotties/loader.json")}
      />
      <Text text={"Ищем подходящий фильм..."} fontSize={20} fontWeight="bold" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,

    width: "100%",
  },
  loader: {
    width: 200,
    height: 200,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    padding: 50,
  },
});
