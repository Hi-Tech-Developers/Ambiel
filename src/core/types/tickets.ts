import {TicketStatus} from "./constants/ticketStatus";

export interface ITickets {
    id: number;
    subject: string;
    businesspartner_id: string;
    businesspartner_name: string;
    businesspartner_status: string;
    businesspartner_type: string;
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
    status: TicketStatus;
    contactperson: string;
    created: string;
    deadline: string;
    duration: string;
    responsible: {
        id: number;
        first_name: string;
        last_name: string;
        email_address: string;
    };
    reclamation: number;
    tasks: {
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
    };
}
