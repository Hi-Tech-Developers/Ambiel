import { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { Colors } from "../../styles/colors";
import AmbielSafeAreaView from "../common/AmbielSafeAreaView";

export default function ViewLayout(props: PropsWithChildren): JSX.Element {
  const { children } = props;
  const theme = useSelector(selectTheme);

  return (
    <AmbielSafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme === "dark" ? Colors.themeDarkBg : Colors.white,
      }}
    >
      {children}
    </AmbielSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 9,
  },
});
