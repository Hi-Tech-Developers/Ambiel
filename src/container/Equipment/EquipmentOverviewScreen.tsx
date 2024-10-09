import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Colors} from "../../styles/colors";
import EquipmentTabLaptopsScreen from "./EquipmentTabLaptopsScreen";
import EquipmentTabComputerScreen from "./EquipmentTabComputerScreen";
import EquipmentTabServerScreen from "./EquipmentTabServerScreen";
import EquipmentTabInfrastructureScreen from "./EquipmentTabInfrastructureScreen";
import EquipmentTabPrintingScreen from "./EquipmentTabPrintingScreen";
import EquipmentTabCommunicationScreen from "./EquipmentTabCommunicationScreen";
import EquipmentTabOthersScreen from "./EquipmentTabOthersScreen";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

type TasksProps = {
    navigation: any;
}


const EquipmentOverviewScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  const { t } = useTranslation("global");
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    navigation.setOptions({ 
      title: `${t("equipment_overview")}`,
      headerBackTitle: t("back"),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <Tab.Navigator
        screenOptions={{ 
          // activeTintColor: "black",
          // inactiveTintColor: "gray",
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 'auto',
            alignItems: 'flex-start'
          },
          tabBarIndicatorStyle:{
            backgroundColor: Colors.ambielBlue,
            height: 8
          }
        }}
        sceneContainerStyle={{ backgroundColor: "white" }}
        initialRouteName="EquipmentOverview"
      >
        <Tab.Screen name="Laptops" component={EquipmentTabLaptopsScreen} />
        <Tab.Screen name="Computer" component={EquipmentTabComputerScreen} />
        { 
        // <Tab.Screen name="Details" component={} /> 
        }
        <Tab.Screen name="Server" component={EquipmentTabServerScreen} />
        <Tab.Screen name="Infrastruktur" component={EquipmentTabInfrastructureScreen} />
        <Tab.Screen name="Printing" component={EquipmentTabPrintingScreen} />
        <Tab.Screen name="Communication" component={EquipmentTabCommunicationScreen} />
        <Tab.Screen name="Others" component={EquipmentTabOthersScreen} />
        
      </Tab.Navigator>
    </View>
  );
};

export default EquipmentOverviewScreen;
