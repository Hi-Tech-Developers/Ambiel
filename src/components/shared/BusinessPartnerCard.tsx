import {StyleSheet, Text, View} from "react-native";
import {IBusinessPartner} from "../../core/types/businesspartner";
import {Colors} from "../../styles/colors";
import {BusinessPartnerGroupCode} from "../../core/types/constants/businessPartnerGroupCode";
import useBusinessPartnerHelper from "../../core/hooks/useBusinessPartnerHelper";
import moment from "moment";

type BusinessPartnerCardProps = {
  businesspartner: IBusinessPartner;
};

export default function BusinessPartnerCard(props: BusinessPartnerCardProps): JSX.Element {
    const {businesspartner} = props;
    // businesspartner.businesspartner_groupcode

    /** Hooks **/
    const {getBusinessPartnerStatusLabel} = useBusinessPartnerHelper();

    return (
        <View style={styles.container}>

            <Text style={styles.titleLabel}>{businesspartner.businesspartner_name}, {businesspartner.businesspartner_city}</Text>
            <View style={styles.headerRow}>
                <Text>{businesspartner.businesspartner_id} ({BusinessPartnerGroupCode.filter((code)=>code.id === parseInt(businesspartner.businesspartner_groupcode)) [0]?.groupcode})</Text>
            </View>

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
