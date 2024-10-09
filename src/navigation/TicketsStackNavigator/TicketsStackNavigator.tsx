import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import TicketsView from "../../views/TicketsView";
import TicketsListView from "../../views/TicketsListView";
import TicketDetailsScreen from "../../container/Tickets/TicketTabDetailsScreen";
import { useSelector } from "react-redux";
import { selectTheme } from "../../core/store/selectors/theme.selectors";

const Stack = createStackNavigator();

const TicketsStackNavigator = () => {
  // const theme = useSelector(selectTheme);
  // const headerStyle = {
  //   backgroundColor: theme === "dark" ? "#181517" : "transparent",
  // };

  // const headerTitleStyle = {
  //   color: theme === "dark" ? "white" : "black",
  // };
  // const headerTintColor = theme === "dark" ? "white" : "black";
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.TICKETS_VIEW}
        component={TicketsView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.TICKETS_LIST}
        component={TicketsListView}
        options={{
          title: "Tickets",
          headerBackTitle: "Zurück",
          // headerStyle,
          // headerTitleStyle,
          // headerTintColor,
        }}
      />
      <Stack.Screen
        name={Routes.TICKET_DETAILS}
        component={TicketDetailsScreen}
        options={{
          title: "Ticket Details",
          headerBackTitle: "Zurück",
          // headerStyle,
          // headerTitleStyle,
          // headerTintColor,
        }}
      />
    </Stack.Navigator>
  );
};
export default TicketsStackNavigator;
