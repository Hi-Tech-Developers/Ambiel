import Inventory from "../container/Inventory/Inventory";

export default function InventoryView({navigation}: { navigation: any }): JSX.Element {
    return (
        <Inventory navigation={navigation}/>
    )
}
