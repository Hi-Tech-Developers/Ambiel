import { IBusinessPartnersResponse } from '../types/apiResponses/businesspartnersResponse';
import { environment } from '../config/environment';
import axios from 'axios';
import { Alert } from 'react-native';

type BusinessPartnerApi = {
  getAllBusinessPartners(token: string): Promise<IBusinessPartnersResponse>;
};

export default function useBusinessPartnerApi(): BusinessPartnerApi {
  /** Get all businesspartners **/
  async function getAllBusinessPartners(token: string): Promise<IBusinessPartnersResponse> {
    const endpoint = `${environment.api.baseUrl}/businesspartners`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    try {
      const response = await axios.get<IBusinessPartnersResponse>(endpoint, config);
      return response.data;
    } catch (e) {
      Alert.alert('error');
      Alert.alert(e);
      console.log(e);
      return { success: false };
    }
  }

  return {
    getAllBusinessPartners,
  };
}
