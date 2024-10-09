import { ITicketResponse } from '../types/apiResponses/ticketResponse';
import { useSelector } from 'react-redux';
import { selectIdentity } from '../../core/store/selectors/identity.selectors';
import { environment } from '../config/environment';
import axios from 'axios';

type TicketApi = {
  getTicket(id: number): Promise<ITicketResponse>;
};

export default function useTicketApi(): TicketApi {
  /** Get ticket **/
  async function getTicket(id: number): Promise<ITicketResponse> {
    const endpoint = `${environment.api.baseUrl}/ticket?id=${id}`;
    const identity = useSelector(selectIdentity);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: identity?.access_token,
      },
    };

    try {
      const response = await axios.get<ITicketResponse>(endpoint, config);
      return response.data;
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }

  return {
    getTicket,
  };
}
