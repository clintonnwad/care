import React from 'react';
import { Alert, Platform, StyleSheet, TextInput, Touchable, View } from 'react-native';

export function AppTextInput({ ...otherProps }) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <TextInput
                style={styles.textInput}
                {...otherProps}
                placeholderTextColor="#A8AFB3"
                keyboardAppearance="dark" />
        </View>
    );
}

export function AppTextInputClone({ ...otherProps }) {
    return (
        <Touchable {...otherProps}>
            <View style={[styles.container, styles.shadowProp]}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#A8AFB3"
                    keyboardAppearance="dark"
                    editable={false}
                    selectTextOnFocus={false} />
            </View>
        </Touchable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172A35',
        borderRadius: 10,
        width: '100%',
        padding: 25,
        marginTop: 10,
        flexDirection: "row",
    },
    textInput: {
        fontSize: 15,
        fontWeight: "500",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "#A8AFB3",
        width: '100%',
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: .17,
        shadowRadius: 3,
    },

});