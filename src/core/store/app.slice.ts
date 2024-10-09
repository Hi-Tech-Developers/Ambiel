import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount } from '../types/account';
import { IIdentity } from '../types/identity';
import { ITicket } from '../types/ticket';
import { ITickets } from '../types/tickets';
import { IBusinessPartner } from '../types/businesspartner';
import { ISupplier } from '../types/supplier';
import { IEmployee } from '../types/employee';
import { fetchBusinessPartners, fetchTickets, fetchEmployees } from './app.effects';
import { AccountTypes } from '../types/constants/accountTypes';
import { ChangeTheme } from '../types/constants/theme';

interface AppSlice {
  identity: IIdentity | null;
  account: IAccount | null;
  accountType: AccountTypes | null;
  tickets: ITickets[];
  businesspartners: IBusinessPartner[];
  suppliers: ISupplier[];
  employees: IEmployee[];
  ticketsLoaded: boolean;
  businesspartnersLoaded: boolean;
  employeesLoaded: boolean;
  theme:ChangeTheme|null
  
}

const initialState: AppSlice = {
  identity: null,
  account: null,
  accountType: null,
  tickets: [],
  businesspartners: [],
  suppliers: [],
  employees: [],
  ticketsLoaded: false,
  businesspartnersLoaded: false,
  employeesLoaded: false,
  theme:null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIdentity: (state, action: PayloadAction<IIdentity>) => {
      state.identity = action.payload;
    },
    resetIdentity: (state, action) => {
      state.identity = null;
      state.accountType = null;
    },
    setAccount: (state, action: PayloadAction<IAccount | null>) => {
      state.account = action.payload;
    },
    
    setAccountType: (state, action: PayloadAction<AccountTypes | null>) => {
      state.accountType = action.payload as AccountTypes;
    },
    setChangeTheme: (state, action: PayloadAction<ChangeTheme | null>) => {
      state.theme = action.payload as ChangeTheme;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBusinessPartners.fulfilled, (state, action) => {
      state.businesspartners = action.payload.businesspartners ?? [];
      state.businesspartnersLoaded = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload.employees ?? [];
      state.employeesLoaded = true;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.tickets = action.payload.tickets ?? [];
      state.ticketsLoaded = true;
    });
  },
});

export const { setIdentity, resetIdentity, setAccount,setAccountType,setChangeTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;
