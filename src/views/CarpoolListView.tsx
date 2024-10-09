import ViewLayout from "../components/layout/ViewLayout";
import CarpoolList from "../container/Carpool/CarpoolListScreen";

export default function CarpoolListView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <CarpoolList navigation={navigation} route={route} />
    </ViewLayout>
  );
}
