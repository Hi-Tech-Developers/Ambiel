import ViewLayout from "../components/layout/ViewLayout";
import TicketsList from "../container/Tickets/TicketsListScreen";

export default function TicketsListView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <TicketsList navigation={navigation} route={route} />
    </ViewLayout>
  );
}
