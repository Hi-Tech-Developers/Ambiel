import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

type SalesOpportunitiesListScreenProps = {
    navigation: any;
}

export default function SalesOpportunitiesListScreen(props: SalesOpportunitiesListScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("opportunities")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <Text>SalesOpportunities Übersicht</Text>
    )
}

const styles = StyleSheet.create({});
