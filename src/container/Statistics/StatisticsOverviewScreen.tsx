import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

type StatisticsOverviewScreenProps = {
    navigation: any;
}

export default function StatisticsOverviewScreen(props: StatisticsOverviewScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("statistics")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <Text>Statistics</Text>
    )
}

const styles = StyleSheet.create({});
