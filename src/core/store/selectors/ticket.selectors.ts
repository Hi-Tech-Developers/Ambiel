import { RootState } from '../store';
import { TicketStatus } from '../../types/constants/ticketStatus';
import { TicketTaskStatus } from '../../types/constants/ticketStatus';

export const selectTickets = (state: RootState) => state.app.tickets;

export const selectTicketsLoaded = (state: RootState) =>
  state.app.ticketsLoaded;

export const selectHasIdentity = (state: RootState) =>
  state.app.identity !== null;

export const selectTicketsWithStatusCount = (status: TicketStatus) => (state: RootState) =>
    state.app.tickets.filter((t) => t.status === status).length;

export const selectTicketsWithStatus = (status: TicketStatus) => (state: RootState) =>
    state.app.tickets.filter((t) => t.status === status);
    