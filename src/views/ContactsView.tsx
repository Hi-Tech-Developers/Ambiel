import Contacts from "../container/Contacts/Contacts";

export default function ContactsView({navigation}: { navigation: any }): JSX.Element {
    return (
        <Contacts navigation={navigation}/>
    )
}
