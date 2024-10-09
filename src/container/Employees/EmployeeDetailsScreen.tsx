import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';

type EmployeeDetailsScreenProps = {
    navigation: any;
    employee: number;
}

export default function EmployeeDetailsScreen(props: EmployeeDetailsScreenProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    return (
        <Text>Personen Details</Text>
    )
}

const styles = StyleSheet.create({});
