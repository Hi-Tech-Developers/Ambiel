import React, { useEffect, useState } from "react";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import { ChangeTheme } from "../../core/types/constants/theme";
import { setChangeTheme } from "../../core/store/app.slice";
import { Colors } from "../../styles/colors";
import AccountTypeSelector from "../Account Type/AccountTypeSelector";

type Theme = {
  navigation: any;
};

export default function Theme(props: Theme): JSX.Element {
  const { navigation } = props;
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);

  const handleThemeSelect = (theme: ChangeTheme) => {
    dispatch(setChangeTheme(theme));
  };

  return (
    <ContainerLayout>
      <ScrollView style={styles.container}>
        <AccountTypeSelector
          label="Dark"
          backgroundColor={Colors.white}
          isSelected={selectedTheme === "dark"}
          onPress={() => handleThemeSelect(ChangeTheme.DARK)}
        />
        <AccountTypeSelector
          label="Light"
          backgroundColor={Colors.white}
          isSelected={selectedTheme === ChangeTheme.LIGHT || !selectedTheme}
          onPress={() => handleThemeSelect(ChangeTheme.LIGHT)}
        />
      </ScrollView>
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
