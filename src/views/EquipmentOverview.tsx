import ViewLayout from "../components/layout/ViewLayout";
import EquipmentList from "../container/Equipment/EquipmentOverviewScreen";

export default function EquipmentOverview({navigation, route}: { navigation: any, route: any }): JSX.Element {
    return (
        <ViewLayout>
            <EquipmentList navigation={navigation} route={route}/>
        </ViewLayout>

    )
}
