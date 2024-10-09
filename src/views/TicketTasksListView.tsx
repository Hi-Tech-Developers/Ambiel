import { SafeAreaView } from "react-native";
import ViewLayout from "../components/layout/ViewLayout";

export default function TicketTasksListView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <TicketTasksListView navigation={navigation} route={route} />
    </ViewLayout>
  );
}
