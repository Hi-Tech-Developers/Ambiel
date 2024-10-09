import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import AmbielText from "../common/AmbielText";
import AmbielTouchableOpacity from "../common/AmbielTouchableOpacity";

type ThemeSummaryNavigation = {
  label: string;
  iconColor: string;
  backgroundColor: string;
  onPress(): void;
};

export default function ThemeSummaryNavigation(
  props: ThemeSummaryNavigation
): JSX.Element {
  const { label, iconColor, backgroundColor, onPress } = props;
  const theme = useSelector(selectTheme);

  return (
    <AmbielTouchableOpacity style={[styles.container]} onPress={onPress}>
      <MaterialCommunityIcons
        name="theme-light-dark"
        style={[
          styles.icon,
          { backgroundColor: backgroundColor },
          { color: iconColor },
        ]}
      />
      <AmbielText style={styles.label}> {label}</AmbielText>
      <MaterialCommunityIcons
        name="chevron-right"
        style={[
          styles.navIcon,
          {
            color: theme === "dark" ? Colors.white : Colors.themeDarkBg,
          },
        ]}
      />
    </AmbielTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  icon: {
    padding: 12,
    backgroundColor: Colors.lightYellow,
    color: Colors.orange,
    fontSize: 24,
    borderRadius: 10,
    overflow: "hidden",
    marginEnd: 14,
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
  },
  navIcon: {
    marginStart: "auto",
    fontSize: 24,
  },
});
