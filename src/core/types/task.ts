import { TicketStatus } from './constants/ticketStatus';

export interface ITask {
  id: number;
  ticket: number;
  order: number;
  subject: string;
  description: string;
  employees: {
    id: number;
    name: string;
  };
  contact: string;
  status: number;
  service_hours: string;
  create_date: string;
  deadline: string;
  due: string;
  deadlineOrder: string;
}
