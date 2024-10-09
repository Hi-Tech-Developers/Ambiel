import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

type ItemsListScreenProps = {
    navigation: any;
}

export default function ItemsListScreen(props: ItemsListScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("items")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <Text>Items Übersicht</Text>
    )
}

const styles = StyleSheet.create({});
