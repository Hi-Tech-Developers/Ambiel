import BusinessPartnersScreen from "../container/BusinessPartners/BusinessPartnersScreen";
import ViewLayout from "../components/layout/ViewLayout";

export default function BusinessPartnersView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <BusinessPartnersScreen navigation={navigation} route={route} />
    </ViewLayout>
  );
}
