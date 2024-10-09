import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabOthersScreenProps = {
}

export default function EquipmentTabOthersScreen(props: EquipmentTabOthersScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Others Screen</Text>
    )
}

const styles = StyleSheet.create({});
