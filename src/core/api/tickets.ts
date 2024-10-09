import { ITicketsResponse } from '../types/apiResponses/ticketsResponse';
import { environment } from '../config/environment';
import axios from 'axios';

type TicketsApi = {
  getAllTickets(token: string): Promise<ITicketsResponse>;
};

export default function useTicketsApi(): TicketsApi {
  /** Get all tickets **/
  async function getAllTickets(token: string): Promise<ITicketsResponse> {
    const endpoint = `${environment.api.baseUrl}/tickets`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };

    try {
      const response = await axios.get<ITicketsResponse>(endpoint, config);
      return response.data;
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }

  return {
    getAllTickets,
  };
}
