import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

type PerformanceOverviewScreenProps = {
    navigation: any;
}

export default function PerformanceOverviewScreen(props: PerformanceOverviewScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("performance")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <Text>Performance</Text>
    )
}

const styles = StyleSheet.create({});
