import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabServerScreenProps = {
}

export default function EquipmentTabServerScreen(props: EquipmentTabServerScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Server Screen</Text>
    )
}

const styles = StyleSheet.create({});
