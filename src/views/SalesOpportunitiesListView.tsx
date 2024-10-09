import ViewLayout from "../components/layout/ViewLayout";
import SalesOpportunitiesList from "../container/Sales/SalesOpportunitiesListScreen";

export default function SalesOpportunitiesListView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <SalesOpportunitiesList />
    </ViewLayout>
  );
}
