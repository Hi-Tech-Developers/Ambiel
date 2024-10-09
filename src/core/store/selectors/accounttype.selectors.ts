import {RootState} from "../store";

export const selectAccountType = (state: RootState) => state.app.accountType;
