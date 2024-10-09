import React from "react";
import { StyleSheet, Text, TextProps, View } from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { Colors } from "../../styles/colors";

type AmbielTextProps = {
  themeStyle?: any;
} & TextProps;

const AmbielText: React.FC<AmbielTextProps> = ({
  themeStyle,
  style,
  ...otherProps
}) => {
  const theme = useSelector(selectTheme);
  const textColor = theme === "dark" ? Colors.white : Colors.themeDarkBg;

  return (
    <Text {...otherProps} style={[{ color: textColor }, themeStyle, style]} />
  );
};

export default AmbielText;
