import Home from "../container/Home/Home";
import ViewLayout from "../components/layout/ViewLayout";

export default function HomeView({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <Home />
    </ViewLayout>
  );
}
