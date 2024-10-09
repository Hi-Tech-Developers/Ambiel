import ViewLayout from "../components/layout/ViewLayout";
import EmployeeWorkinghoursList from "../container/Employees/EmployeeWorkinghoursListScreen";

export default function EmployeeWorkinghoursListView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <EmployeeWorkinghoursList navigation={navigation} route={route} />
    </ViewLayout>
  );
}
