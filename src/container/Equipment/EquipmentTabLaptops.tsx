import {StyleSheet, Text} from "react-native";

type EquipmentOverviewScreenProps = {
    navigation: any;
}

export default function EquipmentOverview(props: EquipmentOverviewScreenProps): JSX.Element {
    const {navigation} = props;

    return (
        <Text>Equipment Overview</Text>
    )
}

const styles = StyleSheet.create({});
