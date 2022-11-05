import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function PatientDetails(props) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topSegmentGroup}>
                    <View style={styles.topSegmentOne}>
                        <View style={styles.topSegmentOneRow}>
                            <View style={styles.topSegmentOneColumnFirst}>
                                <Image source={require('../assets/patient-1.png')} style={styles.avatar} />
                            </View>
                            <View style={styles.topSegmentOneColumnSecond}>
                                <Text style={{ fontSize: 22, color: '#FFFFFF', marginTop: 6, fontWeight: '600' }}>Patricia White</Text>
                                <Text style={{ fontSize: 16, color: '#FFFFFF', marginTop: 3 }}>76 y.o Female</Text>
                                <Text style={{ fontSize: 13, color: '#5298EB', marginTop: 3 }}>Joined May 23, 2012</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.topSegmentTwo}>
                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsOne.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>30/100</Text>
                        </View>

                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsTwo.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>15</Text>
                        </View>

                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsThree.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>70</Text>
                        </View>

                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsFour.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>96</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddTestResult")}>
                    <View style={{ padding: 20 }} >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Add Test Result</Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.card, styles.safe]}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>Allergies:</Text>
                    <Text style={{ color: '#fff', fontWeight: '300', marginTop: 3 }}>Cat, Dogs, Rice, Air</Text>

                    <View style={styles.horizontalLine} />
                    <Text style={{ color: '#fff', fontWeight: '700', }}>Conditions:</Text>
                    <Text style={{ color: '#fff', fontWeight: '300', marginTop: 3 }}>AIDs, HIV, Hypertension, Diabeties</Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>Test Results History</Text>
                </View>

                <ScrollView style={{ flex: 1, }}>
                    {/* Test Record 1 */}
                    <View style={[styles.resultsCard, styles.safe]}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Allergies:</Text>

                        <View style={styles.horizontalLine} />

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../assets/nurse.png')} style={styles.nurseAvatar} />
                            </View>
                            <View style={{ flex: 3 }}>
                                <Text style={{ marginTop: 10, fontSize: 18, color: '#fff' }}>Dr. Veronica  Pearl</Text>
                                <Text style={{ color: '#B4B4B4' }}>Ordipedian</Text>
                            </View>
                        </View>

                    </View>






                    {/* Test Record 2 */}
                    <View style={[styles.card, styles.danger]}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Allergies:</Text>
                        <Text style={{ color: '#fff', fontWeight: '300', marginTop: 3 }}>Cat, Dogs, Rice, Air</Text>

                        <View style={styles.horizontalLine} />
                        <Text style={{ color: '#fff', fontWeight: '700', }}>Conditions:</Text>
                        <Text style={{ color: '#fff', fontWeight: '300', marginTop: 3 }}>AIDs, HIV, Hypertension, Diabeties</Text>
                    </View>


                </ScrollView>







            </View>



        </View>
    );
}

export default PatientDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    top: {
        flex: 1,
        flexDirection: 'column',
    },
    bottom: {
        flex: 3,
        flexDirection: 'column',
    },
    topSegmentGroup: {
        flexDirection: 'column',
        flex: 1,
    },
    topSegmentOne: {
        flex: 1,
    },
    topSegmentTwo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topSegmentOneRow: {
        flexDirection: 'row',
        flex: 1,
    },
    topSegmentOneColumnFirst: {
        flex: 1,
        justifyItems: 'center',
        alignItems: 'center'
    },
    topSegmentOneColumnSecond: {
        flex: 2,
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: '50%',
    },
    readingCol: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    readingImage: {
        height: 70,
        width: 70,
    },
    readingText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "700",
    },
    card: {
        backgroundColor: '#12232C',
        padding: 25,
        borderRadius: 15,
        marginTop: 15,
    },
    safe: {
        borderLeftColor: '#5CB85C',
        borderLeftWidth: 5,
    },
    danger: {
        borderLeftColor: '#BF4C4C',
        borderLeftWidth: 5,
    },
    horizontalLine: {
        borderBottomColor: '#798083',
        borderBottomWidth: 0.3,
        marginTop: 15,
        marginBottom: 15,
    },
    resultsCard: {
        backgroundColor: '#12232C',
        padding: 25,
        paddingTop: 10,
        borderRadius: 15,
        marginTop: 15,
    },
    nurseAvatar: {
        height: 55,
        width: 55,
        borderRadius: '50%',
    },
})