import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./src/translations/en.json";
import de from "./src/translations/de.json";
import * as SecureStore from "expo-secure-store";
import { SecureStoreKeys } from "./src/core/config/keys/secureStoreKeys";

async function getStoredLanguage() {
  try {
    const language = await SecureStore.getItemAsync(SecureStoreKeys.LANGUAGE);
    return language || "en";
  } catch (error) {
    console.error("Error loading selected language from SecureStore:", error);
    return "en";
  }
}
(async () => {
  const selectedLanguage = await getStoredLanguage();
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: selectedLanguage,
    fallbackLng: "en",
    resources: {
      en: {
        global: en,
      },
      de: {
        global: de,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
})();

export default i18n;
