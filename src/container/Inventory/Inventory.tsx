import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';

type InventoryProps = {
    navigation: any;
}

export default function Inventory(props: InventoryProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    return (
        <Text>Inventory</Text>
    )
}

const styles = StyleSheet.create({});
