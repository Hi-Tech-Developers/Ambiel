import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import HomeView from "../../views/HomeView";
import TicketsView from "../../views/TicketsView";
import TicketsListView from "../../views/TicketsListView";
import BusinessPartnersListView from "../../views/BusinessPartnersListView";
import EquipmentListScreen from "../../container/Employees/EquipmentListScreen";
import EquipmentOverviewScreen from "../../container/Equipment/EquipmentOverviewScreen";
import CarpoolListScreen from "../../container/Carpool/CarpoolListScreen";
import ItemsListScreen from "../../container/Items/ItemsListScreen";
import EmployeesListScreen from "../../container/Employees/EmployeesListScreen";
import EmployeeDetailsScreen from "../../container/Employees/EmployeeDetailsScreen";
import EmployeeWorkinghoursListScreen from "../../container/Employees/EmployeeWorkinghoursListScreen";
import EmployeeHolidaysViewScreen from "../../container/Employees/EmployeeHolidaysListScreen";
import SalesQuotesListScreen from "../../container/Sales/SalesQuotesListScreen";
import SalesOpportunitiesListScreen from "../../container/Sales/SalesOpportunitiesListScreen";
import PerformanceOverviewScreen from "../../container/Performance/PerformanceOverviewScreen";
import StatisticsOverviewScreen from "../../container/Statistics/StatisticsOverviewScreen";
import AccountTypeSelect from "../../container/Account Type/AccountType";
import TicketTabDetailsScreen from "../../container/Tickets/TicketTabDetailsScreen";
import BusinessPartnerTabDetailsScreen from "../../container/BusinessPartners/BusinessPartnerTabDetailsScreen";
import TicketTabTasksScreen from "../../container/Tickets/TicketTabTasksScreen";
import { useTranslation } from "react-i18next";
import MonitoringOverviewScreen from "../../container/Monitoring/MonitoringOverviewScreen";
import CompassOverviewScreen from "../../container/Sales/CompassOverviewScreen";

const Stack = createStackNavigator();
const { t } = useTranslation("global");

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.HOME}
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.ACCOUNT_TYPE}
        component={AccountTypeSelect}
        options={{
          headerShown: true,
          title: t("account_type"),
        }}
      />

      <Stack.Screen
        name={Routes.TICKETS_VIEW}
        component={TicketsView}
        options={{
          headerShown: true,
          title: t("tickets"),
        }}
      />
      <Stack.Screen
        name={Routes.TICKETS_LIST}
        component={TicketsListView}
        options={{
          title: t("tickets"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.TICKET_DETAILS}
        component={TicketTabDetailsScreen}
        options={{
          title: t("ticket_details"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.TICKET_TASKS_LIST}
        component={TicketTabTasksScreen}
        options={{
          title: t("tasks"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.BUSINESSPARTNER_DETAILS}
        component={BusinessPartnerTabDetailsScreen}
        options={{
          title: t("business_partners"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.BUSINESSPARTNERS}
        component={BusinessPartnersListView}
        options={{
          title: t("customers"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.EQUIPMENT_LIST}
        component={EquipmentListScreen}
        options={{
          title: t("equipment"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.EQUIPMENT_OVERVIEW}
        component={EquipmentOverviewScreen}
        options={{
          title: t("equipment_overview"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.CARPOOL_CARS_LIST}
        component={CarpoolListScreen}
        options={{
          title: t("carpool"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.ITEMS_LIST}
        component={ItemsListScreen}
        options={{
          title: t("items"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.EMPLOYEES_LIST}
        component={EmployeesListScreen}
        options={{
          title: t("team"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.EMPLOYEE_DETAILS}
        component={EmployeeDetailsScreen}
        options={{
          title: t("employee_details"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.EMPLOYEE_WORKINGHOURS_LIST}
        component={EmployeeWorkinghoursListScreen}
        options={{
          title: t("time_reports"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.EMPLOYEE_HOLIDAYS_LIST}
        component={EmployeeHolidaysViewScreen}
        options={{
          title: t("leaves"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.SALES_QUOTES_LIST}
        component={SalesQuotesListScreen}
        options={{
          title: t("quotes"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.SALES_OPPORTUNITIES_LIST}
        component={SalesOpportunitiesListScreen}
        options={{
          title: t("opportunities"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.PERFORMANCE_OVERVIEW}
        component={PerformanceOverviewScreen}
        options={{
          title: t("performance"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.STATISTICS_OVERVIEW}
        component={StatisticsOverviewScreen}
        options={{
          title: t("statistics"),
          headerBackTitle: t("back"),
        }}
      />
      <Stack.Screen
        name={Routes.MONITORING_OVERVIEW}
        component={MonitoringOverviewScreen}
        options={{
          title: t("monitoring"),
          headerBackTitle: t("back"),
        }}
      />  
      <Stack.Screen
        name={Routes.COMPASS_OVERVIEW}
        component={CompassOverviewScreen}
        options={{
          title: t("compass"),
          headerBackTitle: t("back"),
        }}
      />            
    </Stack.Navigator>
  );
};
export default HomeNavigator;
