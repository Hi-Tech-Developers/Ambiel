import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import AppointmentsView from "../../views/AppointmentsView";

const Stack = createStackNavigator();

const AppointmentStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.APPOINTMENTS}
        component={AppointmentsView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AppointmentStackNavigator;
