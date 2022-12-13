import React from 'react';
import { StyleSheet, View } from 'react-native';

function HealthStatus(props) {
    return (
        <View style={props.status == "EMERGENCY" ? [styles.indicator, styles.danger]
            :
            props.status == "NEEDS_MONITORING" ?
                [styles.indicator, styles.warning]
                :
                [styles.indicator, styles.normal]
        }>
        </View>
    );
}

export default HealthStatus;
const styles = StyleSheet.create({
    indicator: {
        height: 8,
        width: 8,
        borderRadius: 50 / 2,
        marginTop: 10,
        marginLeft: 10,
    },
    normal: {
        backgroundColor: '#5CB85C',
    },
    danger: {
        backgroundColor: 'red',
    },
    warning: {
        backgroundColor: 'orange',
    },

})
