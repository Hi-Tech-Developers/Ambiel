import {Colors} from "../../styles/colors";
import {TextInput, View, Text, KeyboardTypeOptions, StyleSheet} from "react-native";

type CustomTextInputProps = {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    value: string;
    onTextChange(text: string): void;
    label?: string;
    secureTextEntry?: boolean;
    editable?: boolean;
}

export default function CustomTextInput(props: CustomTextInputProps): JSX.Element {
    const { label, placeholder, keyboardType, value, onTextChange, secureTextEntry, editable } = props;


    return (
        <View style={styles.container}>
            {label && (
                <Text style={styles.label}>{ label }</Text>
            )}
            <TextInput
                style={styles.input}
                placeholder={ placeholder }
                defaultValue={value ?? ''}
                placeholderTextColor={Colors.grey}
                onChangeText={onTextChange}
                autoCapitalize={keyboardType === 'email-address' ? 'none' : "sentences"}
                autoCorrect={false}
                spellCheck={false}
                importantForAutofill={"no"}
                autoComplete={"off"}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry ?? false}
                editable={editable ?? true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
        marginStart: 8,
    },
    input: {
        fontSize: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: Colors.lightGrey,
        borderRadius: 10,
        fontWeight: '600',
    }
});
