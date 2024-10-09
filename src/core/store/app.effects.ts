import {createAsyncThunk} from "@reduxjs/toolkit";
import useTicketsApi from "../api/tickets";
import useBusinessPartnersApi from "../api/businesspartners";
import useEmployeesApi from "../api/employees";

export const fetchTickets =
    createAsyncThunk('tickets/fetchTickets', async (token: string) =>
        await useTicketsApi().getAllTickets(token));

export const fetchBusinessPartners =
    createAsyncThunk('businesspartners/fetchBusinessPartners', async (token: string) =>
        await useBusinessPartnersApi().getAllBusinessPartners(token));

export const fetchEmployees =
    createAsyncThunk('businesspartners/fetchEmployees', async (token: string) =>
        await useEmployeesApi().getAllEmployees(token));        
