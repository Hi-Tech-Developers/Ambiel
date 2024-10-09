import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';

type EquipmentListScreenProps = {
    navigation: any;
}

export default function EquipmentListScreen(props: EquipmentListScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    return (
        <Text>EquipmentListScreen</Text>
    )
}

const styles = StyleSheet.create({});
