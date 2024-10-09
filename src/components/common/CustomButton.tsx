import {ActivityIndicator, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Colors} from "../../styles/colors";

type CustomButtonProps = {
    label: string;
    onPress(): void;
    width?: number;
    disabled?: boolean;
    loading?: boolean;
};

export default function CustomButton(props: CustomButtonProps): JSX.Element {
    const { label, width, disabled, onPress, loading } = props;

    return (
        <TouchableOpacity
            style={[styles.btnContainer, {opacity: (disabled || loading) ? 0.5 : 1}]}
            disabled={(!!disabled) || !!loading}
            onPress={onPress}>
            {loading ? (
                <ActivityIndicator color={Colors.white}  />
            ): (
                <Text style={styles.btnLabel}>{ label }</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: Colors.ambielBlue,
        width: '100%',
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 10
    },
    btnLabel: {
        color: Colors.white,
        textAlign: "center",
        fontSize: 16,
        fontWeight: '500',
    }
})
