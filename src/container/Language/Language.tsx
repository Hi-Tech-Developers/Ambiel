import React, { useEffect, useState } from "react";
import ContainerLayout from "../../components/layout/ContainerLayout";
import LanguageSelector from "../../components/settings/LanguageSelector";
import { useTranslation, I18nextProvider } from "react-i18next";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { SecureStoreKeys } from "../../core/config/keys/secureStoreKeys";

type MenuProps = {
  navigation: any;
};

export default function LanguageSelect(props: MenuProps): JSX.Element {
  const { navigation } = props;
  const { t, i18n } = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    navigation.setOptions({
      title: `${t("language")}`,
      headerBackTitle: t("back"),
    });
    loadSelectedLanguage();
  }, [navigation]);

  async function loadSelectedLanguage() {
    try {
      const language = await SecureStore.getItemAsync(SecureStoreKeys.LANGUAGE);
      if (language) {
        setSelectedLanguage(language);
      }
    } catch (error) {
      console.error("Error loading selected language from SecureStore:", error);
    }
  }

  async function handleLanguageSelect(language: string) {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    try {
      await SecureStore.setItemAsync(SecureStoreKeys.LANGUAGE, language);
    } catch (error) {
      console.error("Error storing selected language in SecureStore:", error);
    }
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ContainerLayout>
        <ScrollView style={styles.container}>
          <LanguageSelector
            flag="de"
            label="Deutsch"
            // backgroundColor="rgba(255, 255, 255, 0.1)"
            onPress={() => handleLanguageSelect("de")}
            isSelected={selectedLanguage === "de"}
          />
          <LanguageSelector
            label="English"
            flag="us"
            // backgroundColor="rgba(255, 255, 255, 0.1)"
            onPress={() => handleLanguageSelect("en")}
            isSelected={selectedLanguage === "en"}
          />
        </ScrollView>
      </ContainerLayout>
    </I18nextProvider>
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
