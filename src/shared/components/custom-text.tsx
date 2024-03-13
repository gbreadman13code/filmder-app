import React from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";

type TFontSize = 15 | 17 | 20 | 25;
type TFontWeight = "normal" | "bold";

type Props = {
  text?: string | number;
  fontSize?: TFontSize;
  fontWeight?: TFontWeight;
  align?: "left" | "center" | "right";
  style?: StyleProp<TextStyle>;
};

export const Text = ({
  text,
  style,
  fontSize,
  fontWeight,
  align = "left",
}: Props) => {
  return (
    <RNText
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: align,
        color: "#ffffff",
      }}
    >
      {text || ""}
    </RNText>
  );
};
