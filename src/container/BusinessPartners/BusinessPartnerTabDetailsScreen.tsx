import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessPartnerTabMediaScreen from "./BusinessPartnerTabMediaScreen";
import BusinessPartnerTabInfosScreen from "./BusinessPartnerTabInfosScreen";
import BusinessPartnerTabTicketTasksScreen from "./BusinessPartnerTabTicketTasksScreen";
import BusinessPartnerTabTicketTimesScreen from "./BusinessPartnerTabTicketTimesScreen";
import {Colors} from "../../styles/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const BusinessPartnerTabDetailsScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <Tab.Navigator
         screenOptions={{ 
            tabBarScrollEnabled: true,
            tabBarItemStyle: {
              width: 'auto',
              alignItems: 'flex-start',
            },
            tabBarIndicatorStyle:{
              backgroundColor: Colors.ambielBlue,
              height:8,
            }
          }}
          sceneContainerStyle={{ backgroundColor: "white" }}
        initialRouteName="BusinessPartnerMedia"
        // screenOptions={{
        //   activeTintColor: "black",
        //   inactiveTintColor: "gray",
        // }}
      >
        <Tab.Screen name="Infos" component={BusinessPartnerTabInfosScreen} />
        <Tab.Screen name="Details" component={BusinessPartnerTabDetailsScreen} />
        <Tab.Screen name="Zeiten" component={BusinessPartnerTabTicketTimesScreen} />
        <Tab.Screen name="Aufgaben" component={BusinessPartnerTabTicketTasksScreen} />
        <Tab.Screen name="Anhänge" component={BusinessPartnerTabMediaScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default BusinessPartnerTabDetailsScreen;
