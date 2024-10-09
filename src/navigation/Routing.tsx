import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./routes";
import LoginView from "../views/LoginView";
import {
  CommonActions,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigationProp,
} from "@react-navigation/native";
import { Colors } from "../styles/colors";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import SplashScreen from "react-native-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import useIdentityHelper from "../core/hooks/useIdentityHelper";
import { useDispatch, useSelector } from "react-redux";
import { selectHasIdentity } from "../core/store/selectors/ticket.selectors";
import { AppDispatch } from "../core/store/store";
import { selectIdentity } from "../core/store/selectors/identity.selectors";
import {
  fetchBusinessPartners,
  fetchTickets,
  fetchEmployees,
} from "../core/store/app.effects";
import { useTranslation } from "react-i18next";
import HomeNavigator from "./HomeNavigator/HomeNavigator";
import TicketsStackNavigator from "./TicketsStackNavigator/TicketsStackNavigator";
import BusinessPartnersStackNavigator from "./BusinessPartnersStackNavigator/BusinessPartnersStackNavigator";
import MenuTabNavigator from "./MenuTabNavigator/MenuTabNavigator";
import AppointmentStackNavigator from "./AppointmentStackNavigator/AppointmentStackNavigator";
import TicketTasksStackNavigator from "./TicketTasksStackNavigator/TicketTasksStackNavigator";
import { selectAccountType } from "../core/store/selectors/accounttype.selectors";
import { selectTheme } from "../core/store/selectors/theme.selectors";

export const resetAction = (
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  screenName: string,
  params?: Object
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: screenName, params: params }],
    })
  );
};

export const AppNavigator = () => {
  // SplashScreen.hide();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const hasIdentity = useSelector(selectHasIdentity);
  const identity = useSelector(selectIdentity);

  const accountType = useSelector(selectAccountType);
  console.log("Account Type =============  ", accountType);

  const [identityCheckInProgress, setIdentityCheckInProgress] =
    useState<boolean>(true);
  const isLoggedIn = useState();
  const { checkIdentity } = useIdentityHelper();
  const dispatch = useDispatch<AppDispatch>();
  /** Initial check of identity **/
  useEffect(() => {
    setIdentityCheckInProgress(true);
    checkIdentity().then(identityCheckResponseHandler);
  }, []);

  useEffect(() => {
    if (!identityCheckInProgress) {
      SplashScreen.hide();
    }
  }, [identityCheckInProgress]);

  useEffect(() => {
    if (hasIdentity && identity?.access_token) {
      dispatch(fetchTickets(identity.access_token));
      dispatch(fetchBusinessPartners(identity.access_token));
      dispatch(fetchEmployees(identity.access_token));
    }
  }, [hasIdentity, identity]);

  /** Handle identity check response **/
  function identityCheckResponseHandler(checkSuccess: boolean): void {
    setIdentityCheckInProgress(false);
  }

  /** Main Tab Navigator **/
  const MainTabNavigator = () => {
    const { t } = useTranslation("global");

    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={Routes.HOME_NAVIGATOR}
          component={HomeNavigator}
          options={{
            title: t("home"),
            // headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.TICKETS_STACK_NAVIGATOR}
          component={TicketsStackNavigator}
          options={{
            title: t("tickets"),
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.BUSINESSPARTNERS_STACK_NAVIGATOR}
          component={BusinessPartnersStackNavigator}
          options={{
            title: t("partners"),
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="contacts-outline"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.APPOINTMENTS_STACK_NAVIGATOR}
          component={AppointmentStackNavigator}
          options={{
            title: t("appointments"),
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.TICKET_TASKS_STACK_NAVIGATOR}
          component={TicketTasksStackNavigator}
          options={{
            title: t("tasks"),
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="checkbox-marked-circle-plus-outline"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.MAIN_TAB_NAVIGATOR}
          component={MenuTabNavigator}
          options={{
            title: t("menu"),
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="view-headline"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  /** Main Stack Navigator **/
  /**  Split for customer view technicans
   * identity types nutzen
   * compontent wechseln, name gleichlassen
   * **/

  const MainStackNavigator = () => {
    if (identityCheckInProgress) {
      return null;
    }
    return (
      <Stack.Navigator>
        {/* {hasIdentity &&
          (identity?.account_type === 'user' ? (
            <Stack.Screen
              name={Routes.MAIN_TAB_NAVIGATOR}
              component={MainTabNavigator}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name={Routes.MAIN_TAB_NAVIGATOR}
              component={MainTabNavigatorTechnician}
              options={{ headerShown: false }}
            />
          ))} */}
        {hasIdentity && (
          <Stack.Screen
            name={Routes.MAIN_TAB_NAVIGATOR}
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name={Routes.LOGIN}
          component={LoginView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  /** Theme **/
  const theme = useSelector(selectTheme);
  const AmbielTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };
  const AmbielDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    },
  };

  return (
    <NavigationContainer
      theme={theme === "dark" ? AmbielDarkTheme : AmbielTheme}
    >
      {MainStackNavigator()}
    </NavigationContainer>
  );
};
