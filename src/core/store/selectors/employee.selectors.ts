import {RootState} from "../store";

export const selectEmployees = (state: RootState) => state.app.employees;

export const selectEmployeesLoaded = (state: RootState) => state.app.employeesLoaded;