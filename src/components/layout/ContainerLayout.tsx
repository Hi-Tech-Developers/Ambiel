import { PropsWithChildren } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { Colors } from "../../styles/colors";
import AmbielSafeAreaView from "../common/AmbielSafeAreaView";

export default function ContainerLayout(props: PropsWithChildren): JSX.Element {
  const theme = useSelector(selectTheme);
  // const paddingVertical = Platform.OS === "ios" ? 16 : 40;
  // const paddingHorizontal = Platform.OS === "ios" ? 22 : 25;

  const { children } = props;
  return (
    <AmbielSafeAreaView
      style={[
        styles.container,
        {
          paddingVertical: 16,
          paddingHorizontal: 22,
        },
      ]}
    >
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme === "dark" ? Colors.black : Colors.white}
      />
      {children}
    </AmbielSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
