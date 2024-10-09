import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import AmbielText from "../../components/common/AmbielText";
import AmbielTouchableOpacity from "../../components/common/AmbielTouchableOpacity";

type BusinessPartnersSummaryNavigationScreenProps = {
  label: string;
  iconColor: string;
  backgroundColor: string;
  onPress(): void;
  numberOfTickets?: number;
  iconname: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export default function BusinessPartnerSummaryNavigationScreen(
  props: BusinessPartnersSummaryNavigationScreenProps
): JSX.Element {
  const {
    label,
    iconColor,
    backgroundColor,
    onPress,
    numberOfTickets,
    iconname,
  } = props;
  const theme = useSelector(selectTheme);

  return (
    <AmbielTouchableOpacity style={[styles.container]} onPress={onPress}>
      <MaterialCommunityIcons
        name={iconname}
        style={[
          styles.icon,
          { backgroundColor: backgroundColor },
          { color: iconColor },
        ]}
      />
      <AmbielText style={styles.label}>
        {numberOfTickets} {label}
      </AmbielText>
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
    // color: Colors.grey,
    fontWeight: "600",
    fontSize: 14,
  },
  navIcon: {
    marginStart: "auto",
    fontSize: 24,
  },
});
