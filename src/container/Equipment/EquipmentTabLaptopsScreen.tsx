import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabLaptopsScreenProps = {
}

export default function EquipmentTabLaptopsScreen(props: EquipmentTabLaptopsScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Laptop Screen</Text>
    )
}

const styles = StyleSheet.create({});
