import React from "react";
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../../../shared/colors";
import { Typography } from "../typography";
import { StyledButton } from "./index.styles";

export function CustomButton({
  title,
  colorText,
  onPress,
  disabled,
  backgroundColor,
  height,
  width,
  iconName,
  iconMargin,
  iconColor,
}) {
  return (
    <StyledButton
      onPress={onPress}
      disabled={disabled}
      backgroundColor={backgroundColor}
      height={height}
      style={{width: width}}>
      <Typography
        caption={title}
        color={colorText ? colorText : COLORS.white}
      />
      <View style={{marginLeft: iconMargin}}>
        <Icon name={iconName} size={25} color={iconColor} />
      </View>
    </StyledButton>
  );
}