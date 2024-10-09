import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../../styles/colors";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import AmbielText from "../../components/common/AmbielText";
import AmbielTouchableOpacity from "../../components/common/AmbielTouchableOpacity";

type LanguageSelectorProps = {
  label: string;
  backgroundColor: string;
  onPress(): void;

  isSelected: boolean;
};

export default function AccountTypeSelector(
  props: LanguageSelectorProps
): JSX.Element {
  const { label, backgroundColor, onPress, isSelected } = props;
  const theme = useSelector(selectTheme);
  const radioIconColor = isSelected
    ? theme === "dark"
      ? Colors.white
      : "black"
    : theme === "dark"
    ? Colors.grey
    : "black";

  return (
    <AmbielTouchableOpacity style={[styles.container]} onPress={onPress}>
      <View style={isSelected ? styles.radioSelected : styles.radioUnselected}>
        {isSelected  ? (
          <MaterialCommunityIcons
            name="radiobox-marked"
            size={24}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="radiobox-blank"
            size={24}
            color={Colors.black}
          />
        )}
      </View>
      <AmbielText style={styles.label}> {label}</AmbielText>
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
