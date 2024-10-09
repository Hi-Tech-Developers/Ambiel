import {ITickets} from "../tickets";

export interface ITicketsResponse {
    success: boolean;
    tickets?: ITickets[];
    error?: string;
}
