import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import ContainerLayout from "../../components/layout/ContainerLayout";
import AmbielText from "../../components/common/AmbielText";

const TicketTasksScreen = () => {
  return (
    <ContainerLayout>
      <AmbielText>Ticket Tasks List Screen</AmbielText>
    </ContainerLayout>
  );
};

export default TicketTasksScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
});
