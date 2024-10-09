import ViewLayout from "../../components/layout/ViewLayout";
import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AmbielText from "../../components/common/AmbielText";

type AppointmentsScreenProps = {

}

export default function AppointmentsScreen(props: AppointmentsScreenProps): JSX.Element {
    const { t } = useTranslation('global');
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ 
          title: `${t("appointments")}`,
          headerBackTitle: t("back"),
        });
      }, [navigation]);

    return (
        <ViewLayout>
        <AmbielText>{t('appointments')}</AmbielText>
        </ViewLayout>
    )
}

const styles = StyleSheet.create({});
