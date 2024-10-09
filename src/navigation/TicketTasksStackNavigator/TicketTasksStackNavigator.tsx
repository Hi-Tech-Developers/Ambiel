import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import TicketTasksScreen from "../../container/Tickets/TicketTasksScreen";

const Stack = createStackNavigator();

const TicketTasksStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.TICKET_TASK_VIEW}
        component={TicketTasksScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default TicketTasksStackNavigator;
