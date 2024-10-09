import {StyleSheet, Text, View} from "react-native";
import {ITicket} from "../../core/types/ticket";
import {Colors} from "../../styles/colors";
import useTicketHelper from "../../core/hooks/useTicketHelper";
import moment from "moment";

type TicketTasksCardProps = {
    ticket: ITicket;
};

export default function TicketTasksCard(props: TicketTasksCardProps): JSX.Element {
    const {ticket} = props;

    /** Hooks **/
    const {getTicketStatusLabel} = useTicketHelper();

    // moment.locale('ge');
    var created = moment(new Date(ticket?.created)).local().format('DD.MM.YY hh:MM');
    var deadline = moment(new Date(ticket?.deadline)).local().format('DD.MM.YY hh:MM');

    return (

        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.numberLabel}>{ticket?.id} { ticket?.subject }</Text>
                {ticket?.status === 1 && (
                    <Text style={styles.newStatusLabel}>{getTicketStatusLabel(ticket?.status)}</Text>
                )}
                {[2, 3].includes(ticket?.status) && (
                    <Text style={styles.openStatusLabel}>{getTicketStatusLabel(ticket?.status)}</Text>
                )}
                {ticket?.status ===  4 && (
                    <Text style={styles.progressStatusLabel}>{getTicketStatusLabel(ticket?.status)}</Text>
                )}
                {[5, 6, 7].includes(ticket?.status) && (
                    <Text style={styles.doneStatusLabel}>{getTicketStatusLabel(ticket?.status)}</Text>
                )}

            </View>

            <View style={styles.employeeRow}>
                <View style={{ marginEnd: 0}}>
                    <Text style={styles.employeeRowLabel}>Kunde: {ticket.businesspartner_id} {ticket.category}</Text>
                    { 
                    //<Text style={styles.employeeRowLabel}>Kunden AP: {ticket.contactperson}</Text> 
                    }
                </View>
            </View>
            <View style={styles.employeeRow}>
                <View style={{ marginEnd: 10}}>
                    <Text style={styles.employeeRowLabel}>Ersteller:</Text>
                    <Text style={styles.employeeRowValue}>{ticket?.creator?.first_name} {ticket?.creator?.last_name}</Text>
                </View>
                <View style={{ marginEnd: 10}}>
                    <Text style={styles.employeeRowLabel}>Bearbeiter:</Text>
                    <Text style={styles.employeeRowValue}>{ticket?.worker?.first_name} {ticket?.worker?.last_name}</Text>
                </View>
                <View>
                    <Text style={styles.employeeRowLabel}>Verantwortlicher:</Text>
                    <Text style={styles.employeeRowValue}>{ticket?.responsible?.first_name} {ticket?.responsible?.last_name}</Text>
                </View>
            </View>
            <Text style={styles.dateLabel}>Start: { created } Uhr  Termin: { deadline } Uhr</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'rgba(219, 226, 232, 0.8)',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 12,
        width: '100%',

        shadowColor: Colors.black,
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
        marginBottom: 2
    },
    numberLabel: {
        fontWeight: '600',
        color: Colors.grey
    },
    newStatusLabel: {
        fontSize: 10,
        color: 'rgba(255, 82, 82, 0.8)',
        backgroundColor: 'rgba(255, 82, 82, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        overflow: "hidden"
    },
    openStatusLabel: {
        fontSize: 10,
        color: 'rgba(255, 183, 79, 0.8)',
        backgroundColor: 'rgba(255, 183, 79, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        overflow: "hidden"
    },
    progressStatusLabel: {
        fontSize: 10,
        color: 'rgba(13, 169, 239, 0.8)',
        backgroundColor: 'rgba(13, 169, 239, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        overflow: "hidden"
    },
    doneStatusLabel: {
        fontSize: 10,
        color: 'rgba(67, 217, 163, 0.8)',
        backgroundColor: 'rgba(67, 217, 163, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        overflow: "hidden"
    },
    titleLabel: {
        fontWeight: '600',
        color: Colors.grey,
        fontSize: 15,
        marginBottom: 2
    },
    dateLabel: {
        fontSize: 12,
        fontWeight: '300'
    },
    employeeRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: '300',
        marginBottom: 2
    },
    employeeRowLabel: {
        fontSize: 12,
        fontWeight: '300',
        marginBottom: 2
    },
    employeeRowValue: {
        fontSize: 12,
        fontWeight: '300',
        color: Colors.grey,
        marginBottom: 2
    }
})
