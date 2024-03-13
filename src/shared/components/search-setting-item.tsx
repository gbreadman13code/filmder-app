import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./custom-text";

type Props = {
  text: string;
  controller: ReactNode;
  additionalNode?: ReactNode;
};

export const SearchSettingItem = ({
  text,
  controller,
  additionalNode,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text text={text} />
      <View style={styles.rightColumn}>
        {controller}
        {additionalNode}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  rightColumn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
});
