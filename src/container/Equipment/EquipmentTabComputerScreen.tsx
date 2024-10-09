import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabComputerScreenProps = {
}

export default function EquipmentTabComputerScreen(props: EquipmentTabComputerScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Computer Screen</Text>
    )
}

const styles = StyleSheet.create({});
