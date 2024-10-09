import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { Colors } from "../../styles/colors";
import { SafeAreaViewProps } from "react-native-safe-area-context";

type AmbielTouchableOpacity = {
  themeStyle?: any;
} & TouchableOpacityProps;
const AmbielTouchableOpacity: React.FC<AmbielTouchableOpacity> = ({
  themeStyle,
  style,
  ...otherProps
}) => {
  const theme = useSelector(selectTheme);
  const backgroundColor = theme === "dark" ? Colors.themeGrey : Colors.white;
  return (
    <TouchableOpacity
      {...otherProps}
      style={[{ backgroundColor: backgroundColor }, themeStyle, style]}
    />
  );
};

export default AmbielTouchableOpacity;
