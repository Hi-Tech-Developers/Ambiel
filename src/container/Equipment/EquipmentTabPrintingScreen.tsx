import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabPrintingScreenProps = {
}

export default function EquipmentTabPrintingScreen(props: EquipmentTabPrintingScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Printing Screen</Text>
    )
}

const styles = StyleSheet.create({});
