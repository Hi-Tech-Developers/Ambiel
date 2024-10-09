import {StyleSheet, Text} from "react-native";
import { useTranslation } from 'react-i18next';

type ContactsProps = {
    navigation: any;
}

export default function Contacts(props: ContactsProps): JSX.Element {
    const {navigation} = props;
    const { t } = useTranslation('global');

    return (
        <Text>MyContacts</Text>
    )
}

const styles = StyleSheet.create({});
