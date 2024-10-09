import {BusinessPartnerStatus} from "./constants/businessPartnerStatus";

export interface IBusinessPartner {
    businesspartner_id: number;
    businesspartner_name: string;
    businesspartner_employees: {
        id: number;
        name: string;
        position: string;
        email_address: string;
    };
    businesspartner_status: string;
    businesspartner_type: string;
    businesspartner_city: string;
    businesspartner_groupcode: string;
    businesspartner_manufacturer: string;
}
