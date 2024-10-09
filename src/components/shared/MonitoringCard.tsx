import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../styles/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IMonitoring } from "../../core/types/monitoring";

type MonitoringCardProps = {
  host: IMonitoring;
};

export default function MonitoringCard(props: MonitoringCardProps): JSX.Element {
    const {host} = props;

    /** Hooks **/

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.titleLabel}>{host.display_name}</Text>
                <Text style={styles.titleLabel}>{host.ip_address}</Text>
            </View>
            <Text>{host.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBlue,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 18,
        marginBottom: 16,
        width: '100%',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.02,
        shadowRadius: 1.84,
        elevation: 5,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    titleLabel: {
        fontWeight: '600',
        color: Colors.grey,
        fontSize: 15,
        marginBottom: 8
    }
})
