import { SafeAreaView } from "react-native";
import Menu from "../container/Menu/Menu";
import ViewLayout from "../components/layout/ViewLayout";

export default function MenuView({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  return (
    <ViewLayout>
      <Menu navigation={navigation} />
    </ViewLayout>
  );
}
