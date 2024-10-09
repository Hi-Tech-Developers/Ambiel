import ViewLayout from "../../components/layout/ViewLayout";
import { StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";

type TicketTasksListProps = {
  navigation: any;
};

export default function TicketTasksList(
  props: TicketTasksListProps
): JSX.Element {
  const { navigation } = props;
  const { t } = useTranslation("global");

  return (
    <ViewLayout>
      <Text>Aufgaben Übersicht</Text>
    </ViewLayout>
  );
}

const styles = StyleSheet.create({});
