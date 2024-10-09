import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { logo } from "../../styles/images";
import LanguageSummaryNavigation from "../../components/settings/LanguageSummaryNavigation";
import { Routes } from "../../navigation/routes";
import { useTranslation } from "react-i18next";
import { Colors } from "../../styles/colors";
import DeviceInfo from "react-native-device-info";
import ThemeSummaryNavigation from "../../components/settings/ThemeSummaryNavigation";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";
import AmbielText from "../../components/common/AmbielText";

type MenuProps = {
  navigation: any;
};

export default function Menu(props: MenuProps): JSX.Element {
  const { navigation } = props;
  const { t } = useTranslation("global");
  const theme = useSelector(selectTheme);
  const appVersion = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();
  const [majorVersion, minorVersion] = appVersion.split(".");

  function LanguageSettingsHandler() {
    navigation.navigate(Routes.LANGUAGE);
  }
  function ThemeSelectHandler() {
    navigation.navigate(Routes.THEME);
  }
  return (
    <ContainerLayout>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Image
            style={[
              styles.ambielLogo,
              { tintColor: theme === "dark" ? "white" : "black" },
            ]}
            source={logo}
          />
        </View>
        <LanguageSummaryNavigation
          label={t("select_language")}
          iconColor={Colors.ambielBlue}
          onPress={LanguageSettingsHandler}
        />
        <ThemeSummaryNavigation
          label={t("select_theme")}
          iconColor={Colors.ambielBlue}
          onPress={ThemeSelectHandler}
        />
        <View style={styles.versionContainer}>
          <AmbielText style={styles.versiontext}>
            Version {majorVersion}.{minorVersion} ({buildNumber})
          </AmbielText>
        </View>
      </View>
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 50,
  },
  headerRow: {
    marginBottom: 18,
  },
  ambielLogo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  versionContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 5,
  },
  versiontext: {
    // color: Colors.grey,
    fontSize: 13,
    fontWeight: "600",
  },
});
