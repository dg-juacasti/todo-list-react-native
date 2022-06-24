import React from "react";
import { TextInput } from "react-native";

export function Input({
  placeholder,
  onChangeText,
  borderColor,
  borderWidth,
  borderRadius,
  height,
  width,
  style,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      height={height}
      width={width}
      style={{...style}}
    />
  );
}