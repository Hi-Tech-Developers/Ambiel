import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabCommunicationScreenProps = {
}

export default function EquipmentTabCommunicationScreen(props: EquipmentTabCommunicationScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Communication Screen</Text>
    )
}

const styles = StyleSheet.create({});
