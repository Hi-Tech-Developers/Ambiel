import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors} from "../../styles/colors";

type LoginLinkProps = {
    label: string;
    link: string;
    onLinkPress(link: string): void;
    linkHint?: string;
    disabled? : boolean;
};

export default function LoginLink(props: LoginLinkProps): JSX.Element {
    const {label, link, onLinkPress, linkHint, disabled} = props;

    return (
        <View style={styles.linkGroup}>
            {linkHint && <Text style={styles.linkHint}>{ linkHint }</Text>}
            <TouchableOpacity onPress={() => onLinkPress(link)} disabled={disabled ?? false}>
                <Text style={styles.link}>{ label }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    linkGroup: {
        marginBottom: 20
    },
    linkHint: {
        textAlign: "center",
        color: Colors.grey,
        fontWeight: '500',
        marginBottom: 6
    },
    link: {
        textAlign: "center",
        color: Colors.ambielBlue,
        fontWeight: '600',
    }
})
