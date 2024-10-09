import Login from "../container/Auth/Login";
import ViewLayout from "../components/layout/ViewLayout";

export default function LoginView({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <Login navigation={navigation} />
    </ViewLayout>
  );
}
