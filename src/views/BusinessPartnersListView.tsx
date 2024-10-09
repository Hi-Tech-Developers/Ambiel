import ViewLayout from "../components/layout/ViewLayout";
import BusinessPartnersListScreen from "../container/BusinessPartners/BusinessPartnersListScreen";

export default function BusinessPartnersListView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
    return (
        <ViewLayout>
          <BusinessPartnersListScreen navigation={navigation} route={route} />
        </ViewLayout>
    );
}
