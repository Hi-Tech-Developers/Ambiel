import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import CountryFlag from "react-native-country-flag";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import AmbielText from "../common/AmbielText";
import AmbielTouchableOpacity from "../common/AmbielTouchableOpacity";

type LanguageSelectorProps = {
  label: string;
  backgroundColor: string;
  onPress(): void;
  flag: string;
  isSelected: boolean;
};

export default function LanguageSelector(
  props: LanguageSelectorProps
): JSX.Element {
  const { label, backgroundColor, onPress, isSelected, flag } = props;
  const theme = useSelector(selectTheme);

  return (
    <AmbielTouchableOpacity style={styles.container} onPress={onPress}>
      <View style={isSelected ? styles.radioSelected : styles.radioUnselected}>
        {isSelected ? (
          <MaterialCommunityIcons
            name="radiobox-marked"
            size={24}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="radiobox-blank"
            size={24}
            color={Colors.grey}
          />
        )}
      </View>
      <AmbielText style={styles.label}> {label}</AmbielText>
      <CountryFlag isoCode={flag} size={15} />
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

  label: {
    // color: Colors.grey,
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 8,
    flexGrow: 1,
  },

  radioSelected: {
    borderRadius: 12,
    padding: 2,
  },

  radioUnselected: {
    borderRadius: 12,
    borderColor: Colors.grey,
    padding: 2,
  },
});
