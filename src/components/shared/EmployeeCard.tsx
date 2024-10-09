import {StyleSheet, Text, View} from "react-native";
import {IEmployee} from "../../core/types/employee";
import {Colors} from "../../styles/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type EmployeeCardProps = {
  employee: IEmployee;
};

export default function EmployeeCard(props: EmployeeCardProps): JSX.Element {
    const {employee} = props;

    /** Hooks **/
    // const {getEmployeeStatusLabel} = useEmployeeHelper();
    var icon_gender = "";

    if(employee.employee_gender == 'gt_Female') {
      icon_gender = "face-woman-shimmer";
    } else {
      icon_gender = "face-man";
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.titleLabel}>{employee.employee_name}</Text>
                <MaterialCommunityIcons name="account" size={24} color="black" />
                <MaterialCommunityIcons name="face-man" size={24} color="black" />
                <MaterialCommunityIcons name="plus" size={24} color="green" />
            </View>
            <Text>{employee.employee_jobtitle}</Text>
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
