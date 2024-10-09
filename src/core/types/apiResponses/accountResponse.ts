import {IAccount} from "../account";

export type AccountResponse = {
    success: boolean;
    account?: IAccount;
    error?: string;
}
