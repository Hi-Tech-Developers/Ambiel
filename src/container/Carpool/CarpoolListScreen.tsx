import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

type CarpoolListScreenProps = {
    navigation: any;
}

export default function CarpoolListScreen(props: CarpoolListScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("carpool")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <Text>Carpool Screen</Text>
    )
}

const styles = StyleSheet.create({});
