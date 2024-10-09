import {BusinessPartnerStatus} from "../types/constants/businessPartnerStatus";

type BusinessPartnerHelper = {
    getBusinessPartnerStatusLabel(statusNumber: BusinessPartnerStatus): string;
};

export default function useBusinessPartnerHelper(): BusinessPartnerHelper {

    /** Get BusinessPartner-Status-label **/
    function getBusinessPartnerStatusLabel(statusNumber: BusinessPartnerStatus): string {
        switch (statusNumber) {
            case BusinessPartnerStatus.ACTIVE:
                return 'Aktiviert';
            case BusinessPartnerStatus.INACTIVE:
                return 'Deaktiviert';
        }
    }

    return {
        getBusinessPartnerStatusLabel
    }
}