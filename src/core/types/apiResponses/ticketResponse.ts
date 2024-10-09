import { ITicket } from '../ticket';

export interface ITicketResponse {
  success: boolean;
  ticket?: ITicket;
  error?: string;
}
