import {StyleSheet, Text} from "react-native";

type PerformanceDetailsProps = {
    navigation: any;
}

export default function PerformanceDetails(props: PerformanceDetailsProps): JSX.Element {
    const {navigation} = props;

    return (
        <Text>Performance Details</Text>
    )
}

const styles = StyleSheet.create({});
