import React from "react";
import { TextInput } from "react-native";

export function Input({
  testID,
  value,
  placeholder,
  onChangeText,
  borderColor,
  borderWidth,
  borderRadius,
  height,
  width,
}) {
  return (
    <TextInput
      testID={testID}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      height={height}
      width={width}
    />
  );
}