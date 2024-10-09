import React, { useState } from "react";
import {StyleSheet, Text, View} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EquipmentListView from "../../views/EquipmentListView";
import {Colors} from "../../styles/colors";

type TasksProps = {
    navigation: any;
}


const EquipmentOverviewScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

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
        {

        /*
        <Tab.Screen name="Laptops" component={EquipmentTabLaptops} />
        <Tab.Screen name="Computer" component={EquipmentListView} />
        { 
        // <Tab.Screen name="Details" component={} /> 
        }
        <Tab.Screen name="Server" component={EquipmentListView} />
        <Tab.Screen name="Infrastruktur" component={EquipmentListView} />
        <Tab.Screen name="Printing" component={EquipmentListView} />
        */
        }
      </Tab.Navigator>
    </View>
  );
};

export default EquipmentOverviewScreen;
