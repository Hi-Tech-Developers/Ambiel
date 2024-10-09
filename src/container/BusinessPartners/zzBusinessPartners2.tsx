import {StyleSheet, Text} from "react-native";

type BusinessPartnersProps = {
    navigation: any;
}

export default function BusinessPartners(props: BusinessPartnersProps): JSX.Element {
    const {navigation} = props;

    return (
        <Text>BusinessPartners Übersicht</Text>
    )
}

const styles = StyleSheet.create({});
