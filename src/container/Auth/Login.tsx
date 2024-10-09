import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { logo } from "../../styles/images";
import CustomTextInput from "../../components/common/CustomTextInput";
import CustomButton from "../../components/common/CustomButton";
import LoginLink from "../../components/login/LoginLink";
import { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import { environment } from "../../core/config/environment";
import { Routes } from "../../navigation/routes";
import useIdentityHelper from "../../core/hooks/useIdentityHelper";
import { ActivateIdentityResponses } from "../../core/types/constants/activateIdentityResponses";
import { resetAction } from "../../navigation/Routing";
import { useTranslation } from "react-i18next";

type LoginProps = {
  navigation: any;
};

export default function Login(props: LoginProps): JSX.Element {
  const { navigation } = props;
  const { t } = useTranslation("global");

  /** Hooks **/
  const { activateIdentity } = useIdentityHelper();

  /** Form states **/
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginInProgress, setLoginInProgress] = useState<boolean>(false);

  /** Check if form is valid **/
  const formIsValid = (): boolean => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!emailReg.test(email)) return false;
    return password.length > 3;
  };

  /** Handle link press **/
  function onLinkPressHandler(url: string): void {
    Linking.openURL(url).then();
  }

  /** Handle press on login-btn **/
  async function onLoginBtnPressHandler(): Promise<void> {
    setLoginInProgress(true);
    const response = await activateIdentity(email, password);
    if (response === ActivateIdentityResponses.SUCCESS) {
      loginSuccessHandler().then();
    } else {
      loginFailedHandler(response);
    }
    setLoginInProgress(false);
  }

  /** Handle login-failure **/
  function loginFailedHandler(error: ActivateIdentityResponses): void {
    switch (error) {
      case ActivateIdentityResponses.LOGIN_FAILURE:
        Alert.alert(
          "Login fehlgeschlagen",
          "Die eingegeben Daten sind nicht korrekt."
        );
        return;
      case ActivateIdentityResponses.ACCOUNT_FAILURE:
        Alert.alert(
          "Sitzung abgelaufen",
          "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
        );
        return;
      default:
        Alert.alert(
          "Login fehlgeschlagen",
          "Der Login war nicht erfolgreich. Bitte versuchen Sie es später erneut."
        );
        return;
    }
  }

  /** Handle login-success **/
  async function loginSuccessHandler(): Promise<void> {
    resetAction(navigation, Routes.MAIN_TAB_NAVIGATOR);
  }

  return (
    <ContainerLayout>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image source={logo} style={styles.logoImage} />
        <View style={styles.inputGroup}>
          <CustomTextInput
            placeholder="Ihre E-Mail-Adresse"
            keyboardType="email-address"
            value={email}
            editable={!loginInProgress}
            onTextChange={setEmail}
          />
          <CustomTextInput
            placeholder="Passwort"
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            editable={!loginInProgress}
            onTextChange={setPassword}
          />
        </View>
        <View>
          <LoginLink
            label="Passwort vergessen?"
            link={environment.urls.account_recovery}
            disabled={loginInProgress}
            onLinkPress={onLinkPressHandler}
          />
          <LoginLink
            label="Fordern Sie Ihren Zugang an"
            linkHint="Keinen Zugang:"
            link={environment.urls.request_credentials}
            disabled={loginInProgress}
            onLinkPress={onLinkPressHandler}
          />
        </View>
        <View style={styles.btnGroup}>
          <CustomButton
            label="Anmelden"
            disabled={!formIsValid()}
            loading={loginInProgress}
            onPress={onLoginBtnPressHandler}
          />
        </View>
      </KeyboardAvoidingView>
    </ContainerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoImage: {
    width: 260,
    height: 200,
    resizeMode: "contain",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 20,
  },
  btnGroup: {
    width: "100%",
    marginTop: "auto",
  },
});
