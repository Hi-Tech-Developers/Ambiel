import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

type SalesQuotesListScreenProps = {
    navigation: any;
}

export default function SalesQuotesListScreen(props: SalesQuotesListScreenProps): JSX.Element {
    const navigation = useNavigation();
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("quotes")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <Text>SalesQuotes Übersicht</Text>
    )
}

const styles = StyleSheet.create({});
