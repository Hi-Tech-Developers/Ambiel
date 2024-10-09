import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import MenuView from "../../views/MenuView";
import LanguageSelect from "../../container/Language/Language";
import Theme from "../../container/Theme/Theme";

const Stack = createStackNavigator();

const MenuTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MENU}
        component={MenuView}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.LANGUAGE} component={LanguageSelect} />
      <Stack.Screen name={Routes.THEME} component={Theme} />
    </Stack.Navigator>
  );
};
export default MenuTabNavigator;
