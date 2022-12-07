import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

function AppDropdown(props) {
    const [selected, setSelected] = React.useState("");

    return (
        <View style={styles.container}>
            <SelectList
                setSelected={setSelected}
                data={props.data}
                boxStyles={{ borderColor: 'transparent' }}
                inputStyles={{ fontSize: 15, fontWeight: "500", color: "#A8AFB3", width: '100%', backgroundColor: '#172A35' }}
                dropdownStyles={{ color: '#fff', borderColor: 'transparent' }}
                dropdownTextStyles={{ color: "#A8AFB3", fontWeight: "500", fontSize: 15, }}
                search={false}
                placeholder="Select a gender"
            />
        </View>
    );
}

export default AppDropdown;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172A35',
        borderRadius: 10,
        width: '100%',
        padding: 10,
        marginTop: 10,
    },
    textInput: {
        fontSize: 15,
        fontWeight: "500",
        color: "#A8AFB3",
        width: '100%',
    },
})