import {RootState} from "../store";

export const selectIdentity = (state: RootState) => state.app.identity;
