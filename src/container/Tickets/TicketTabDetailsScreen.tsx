import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TicketTabMediaScreen from "./TicketTabMediaScreen";
import TicketTabInfosScreen from "./TicketTasksScreen";
import TicketTabInternalNoticesScreen from "./TicketTabInternalNoticesScreen";
import TicketTabTimesScreen from "./TicketTabTimesScreen";
import TicketTabTasksScreen from "./TicketTabTasksScreen";
import { Colors } from "../../styles/colors";
import { ITicket } from "../../core/types/ticket";

type TicketTabDetailsScreenProps = {
  navigation: any;
  route: { params: { ticket: ITicket } };
};

const TicketTabDetailsScreen = (props: TicketTabDetailsScreenProps) => {
  const Tab = createMaterialTopTabNavigator();
  const { ticket } = props.route.params;

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: "auto",
            alignItems: "flex-start",
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.ambielBlue,
            height: 8,
          },
        }}
        sceneContainerStyle={{ backgroundColor: "white" }}
        initialRouteName="TicketMedia"
        // screenOptions={{
        //   activeTintColor: "black",
        //   inactiveTintColor: "gray",
        // }}
      >
        <Tab.Screen
          initialParams={{ ticket: ticket }}
          name="Infos"
          component={TicketTabInfosScreen}
        />
        <Tab.Screen
          initialParams={{ ticket: ticket }}
          name="Interne Notiz"
          component={TicketTabInternalNoticesScreen}
        />
        {
          // <Tab.Screen name="Details" component={} />
        }
        <Tab.Screen
          initialParams={{ ticket: ticket }}
          name="Zeiten"
          component={TicketTabTimesScreen}
        />
        <Tab.Screen
          initialParams={{ ticket: ticket }}
          name="Aufgaben"
          component={TicketTabTasksScreen}
        />
        <Tab.Screen
          initialParams={{ ticket: ticket }}
          name="Anhänge"
          component={TicketTabMediaScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TicketTabDetailsScreen;
