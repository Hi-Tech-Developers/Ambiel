import { TicketStatus } from './constants/ticketStatus';
import { ITask } from './task';

export interface ITicket {
  id: number;
  businesspartner_id: number;
  subject: string;
  description: string;
  type: string;
  category: string;
  status: TicketStatus;
  priority: number;
  impact: number;
  responsible: {
    id: number;
    first_name: string;
    last_name: string;
    email_address: string;
  };
  creator: {
    id: number;
    first_name: string;
    last_name: string;
    email_address: string;
  };
  worker: {
    id: number;
    first_name: string;
    last_name: string;
    email_address: string;
  };
  created: string;
  deadline: string;
  dialog: string;
  tasks: ITask[];
  times: {};
  files: {};
  voted: string;
  contactperson: string;
}
