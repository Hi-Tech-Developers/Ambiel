import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Colors} from "../../styles/colors";

type EmployeesSummaryNavigationScreenProps = {
    label: string;
    iconColor: string;
    backgroundColor: string;
    onPress(): void;
    numberOfTickets?: number;
};

export default function EmployeesSummaryNavigationScreen(props: EmployeesSummaryNavigationScreenProps): JSX.Element {
    const {label,iconColor, backgroundColor, onPress, numberOfTickets} = props;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons
                name="contacts-outline"
                style={[
                    styles.icon,
                    { backgroundColor:  backgroundColor},
                    { color: iconColor}
                ]}
            />
            <Text style={styles.label}>{numberOfTickets} {label}</Text>
            <MaterialCommunityIcons name="chevron-right" style={styles.navIcon} />
            <MaterialCommunityIcons name='plus' style={styles.navIcon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGrey,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 12
    },
    icon: {
        padding: 12,
        backgroundColor: Colors.lightYellow,
        color: Colors.orange,
        fontSize: 24,
        borderRadius: 10,
        overflow: "hidden",
        marginEnd: 14
    },
    label: {
        color: Colors.grey,
        fontWeight: '600',
        fontSize: 14
    },
    navIcon: {
        marginStart: 'auto',
        fontSize: 24,
    }
})
