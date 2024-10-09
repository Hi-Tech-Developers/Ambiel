import {StyleSheet, View, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

type CompassOverviewScreenProps = {
    navigation: any;
}

export default function CompassOverviewScreen(props: CompassOverviewScreenProps) {
    const navigation = useNavigation();
    const { t } = useTranslation('global');

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("compass")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    // TODO UL or OL ASK OSAMA
    return (
        <View><Text>HW SW KNOW HOW STRIKS</Text></View>
    );
}

const styles = StyleSheet.create({

});
