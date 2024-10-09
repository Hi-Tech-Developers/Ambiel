import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { Colors } from "../../styles/colors";
import { SafeAreaViewProps } from "react-native-safe-area-context";

type AmbielSafeAreaViewProps = {
  themeStyle?: any;
} & SafeAreaViewProps;
const AmbielSafeAreaView: React.FC<AmbielSafeAreaViewProps> = ({
  themeStyle,
  style,
  ...otherProps
}) => {
  const theme = useSelector(selectTheme);
  const backgroundColor = theme === "dark" ? Colors.themeDarkBg : Colors.white;
  return (
    <SafeAreaView
      {...otherProps}
      style={[{ backgroundColor: backgroundColor }, themeStyle, style]}
    />
  );
};

export default AmbielSafeAreaView;
