import { RootState } from '../store';
import { BusinessPartnerStatus } from '../../types/constants/businessPartnerStatus';
import { BusinessPartnerType } from '../../types/constants/businessPartnerType';

/*
  Status:
  ACTIVE = 'tNO',
  INACTIVE = 'tYES',


  Types:
  cBusinessPartner
  cLid
  cSupplier
*/

export const selectBusinessPartners = (state: RootState) =>
  state.app.businesspartners;

export const selectBusinessPartnersLoaded = (state: RootState) =>
  state.app.businesspartnersLoaded;

export const selectBusinessPartnersWithStatus =
  (status: BusinessPartnerStatus, type: BusinessPartnerType) =>
  (state: RootState) => {
    if (type == 'Manufacturer') {
      return state.app.businesspartners.filter(
        (c) =>
          c.businesspartner_status === status &&
          c.businesspartner_type === 'cSupplier' &&
          c.businesspartner_manufacturer != '' &&
          c.businesspartner_manufacturer != '-1' &&
          c.businesspartner_manufacturer != 'null'
      );
      // if(type.toString === "Manufacturer") {
    } else {
      return state.app.businesspartners.filter(
        (c) =>
          c.businesspartner_status === status && c.businesspartner_type === type
      );
    }
  };
