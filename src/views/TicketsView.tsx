import Tickets from "../container/Tickets/TicketsScreen";
import ViewLayout from "../components/layout/ViewLayout";

export default function TicketsView({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <Tickets navigation={navigation} />
    </ViewLayout>
  );
}
