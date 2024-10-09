import React from "react";
import { View, ViewProps } from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { Colors } from "../../styles/colors";
import { SafeAreaViewProps } from "react-native-safe-area-context";

type AmbielViewProp = {
  themeStyle?: any;
} & ViewProps;
const AmbielView: React.FC<AmbielViewProp> = ({
  themeStyle,
  style,
  ...otherProps
}) => {
  const theme = useSelector(selectTheme);
  const backgroundColor = theme === "dark" ? Colors.themeGrey : Colors.white;
  return (
    <View
      {...otherProps}
      style={[{ backgroundColor: backgroundColor }, themeStyle, style]}
    />
  );
};

export default AmbielView;
