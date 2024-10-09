import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {LoginResponse} from "../types/apiResponses/loginResponse";
import {IIdentity} from "../types/identity";
import useAuthApi from "../api/auth";
import {AccountTypes} from "../types/constants/accountTypes";
import {resetIdentity, setAccount, setIdentity} from "../store/app.slice";
import * as SecureStore from 'expo-secure-store';
import {SecureStoreKeys} from "../config/keys/secureStoreKeys";
import {ActivateIdentityResponses} from "../types/constants/activateIdentityResponses";

type IdentityHelper = {
    checkIdentity(): Promise<boolean>;
    activateIdentity(email: string, password: string): Promise<ActivateIdentityResponses>
    deactivateIdentity(): Promise<void>
};

export default function useIdentityHelper(): IdentityHelper {
    const dispatch = useDispatch<AppDispatch>();
    const {loginUserWithEmailAndPassword, getUserAccount} = useAuthApi();


    /** Check active user-identity **/
    async function checkIdentity(): Promise<boolean> {
        const identityInStore = await SecureStore.getItemAsync(SecureStoreKeys.IDENTITY);

        if (identityInStore === null) return false;

        const identity = JSON.parse(identityInStore) as IIdentity;
        const accountResponse = await getUserAccount(identity.access_token);
        if (!accountResponse.success) return false;
        if (!accountResponse.account) return false;

        dispatch(setIdentity(identity));
        dispatch(setAccount(accountResponse.account));
        return true;
    }

    /** Activate user-identity **/
    async function activateIdentity(email: string, password: string): Promise<ActivateIdentityResponses> {

        /** Get identity **/
        const loginResponse = await loginUserWithEmailAndPassword(email, password);
        if (!loginResponse.success) {
            switch (loginResponse.error) {
                default:
                    return ActivateIdentityResponses.LOGIN_FAILURE;
            }
        }

        /** Create identity **/
        if (!loginResponse.access_token) return ActivateIdentityResponses.LOGIN_FAILURE;
        const identity: IIdentity = {
            businesspartner_id: loginResponse.businesspartner_id ?? '',
            access_token: loginResponse.access_token,
            account_type: loginResponse.account_type ?? AccountTypes.CUSTOMER
        }

        /** Get account **/
        const accountResponse = await getUserAccount(loginResponse.access_token);
        if (!accountResponse.success) {
            switch (accountResponse.error) {
                default:
                    return ActivateIdentityResponses.ACCOUNT_FAILURE
            }
        }
        if (!accountResponse.account) return ActivateIdentityResponses.ACCOUNT_FAILURE;

        /** Save identity and account **/
        dispatch(setIdentity(identity));
        dispatch(setAccount(accountResponse.account));
        await SecureStore.setItemAsync(SecureStoreKeys.IDENTITY, JSON.stringify(identity));

        return ActivateIdentityResponses.SUCCESS;
    }

    /** De-activate user-identity **/
    async function deactivateIdentity(): Promise<void> {
        dispatch(resetIdentity);
        dispatch(setAccount(null));
        await SecureStore.deleteItemAsync(SecureStoreKeys.IDENTITY);
        return;
    }

    return {
        checkIdentity,
        activateIdentity,
        deactivateIdentity
    }
}
