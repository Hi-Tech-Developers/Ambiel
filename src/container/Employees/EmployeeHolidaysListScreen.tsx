import ViewLayout from "../../components/layout/ViewLayout";
import { StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type EmployeeHolidaysViewScreenProps = {
  navigation: any;
};

export default function EmployeeHolidaysViewScreen(
  props: EmployeeHolidaysViewScreenProps
): JSX.Element {
  const { navigation } = props;
  const { t } = useTranslation("global");

  useEffect(() => {
    navigation.setOptions({ 
      title: `${t("leaves")}`,
      headerBackTitle: t("back"),
    });
  }, [navigation]);

  return (
    <ViewLayout>
      <Text>Freizeit & Urlaube Übersicht</Text>
    </ViewLayout>
  );
}

const styles = StyleSheet.create({});
