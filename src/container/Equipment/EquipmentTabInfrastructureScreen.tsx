import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

type EquipmentTabInfrastructureScreenProps = {
}

export default function EquipmentTabInfrastructureScreen(props: EquipmentTabInfrastructureScreenProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <Text>Equipment Tab Infrastructure Screen</Text>
    )
}

const styles = StyleSheet.create({});
