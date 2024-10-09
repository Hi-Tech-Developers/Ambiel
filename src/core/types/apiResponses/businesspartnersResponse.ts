import {IBusinessPartner} from "../businesspartner";

export interface IBusinessPartnersResponse {
    success: boolean;
    businesspartners?: IBusinessPartner[];
    error?: string;
}
