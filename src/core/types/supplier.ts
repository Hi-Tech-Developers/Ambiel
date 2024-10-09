import {BusinessPartnerStatus} from "./constants/businessPartnerStatus";

export interface ISupplier {
    supplier_id: number;
    supplier_name: string;
    supplier_employees: {
        id: number;
        name: string;
        position: string;
        email_address: string;
    };
    supplier_status: string;
}
