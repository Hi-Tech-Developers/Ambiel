import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import BusinessPartnersView from "../../views/BusinessPartnersView";
import BusinessPartnersListView from "../../views/BusinessPartnersListView";
import { useTranslation } from "react-i18next";

const { t } = useTranslation("global");
const Stack = createStackNavigator();

const BusinessPartnersStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.BUSINESSPARTNERS}
        component={BusinessPartnersView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.BUSINESSPARTNERS_LIST}
        component={BusinessPartnersListView}
        options={{
          title: t("customers"),
          headerBackTitle: t("back"),
        }}
      />
    </Stack.Navigator>
  );
};
export default BusinessPartnersStackNavigator;
