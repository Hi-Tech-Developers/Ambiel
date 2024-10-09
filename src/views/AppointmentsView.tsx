import ContainerLayout from "../components/layout/ContainerLayout";
import ViewLayout from "../components/layout/ViewLayout";
import AppointmentsScreen from "../container/Appointments/AppointmentsScreen";

export default function AppointmentsView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): JSX.Element {
  return (
    <ContainerLayout>
      <AppointmentsScreen />
    </ContainerLayout>
  );
}
