import { useIsFocused, useRoute } from '@react-navigation/native';
import { React, useEffect, useState } from 'react';
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { deleteTestRecord, getPatientDetails } from '../api/api';
import { calcNumYears, stringifyDate, stringifyDateLong } from '../components/MomentStringify';

function PatientDetails(props) {
    const route = useRoute();
    const residentID = route.params.residentID;

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState([]);
    let [patientTests, setPatientTests] = useState([]);
    let [latestTestResult, setLatestTestResult] = useState([]);
    let [update, setUpdate] = useState();
    const isFocused = useIsFocused();

    useEffect(() => {
        getPatientDetails(residentID)
            .then(
                (patient) => {
                    setIsLoading(false);
                    setResponse(patient);

                    const patientTests = patient.tests;
                    const latestTestResult = patientTests[patientTests.length - 1];

                    setPatientTests(patientTests.reverse());
                    setLatestTestResult(latestTestResult);
                }
            )
            .catch(function (error) {
                if (error.response) {
                    Alert.alert(
                        "System Error",
                        "Unable to fetch data. Error Details: \n" +
                        error.response.data + "\n\n" +
                        error.response.status + "\n\n" +
                        error.response.headers + "\n\n"
                    );
                } else if (error.request) {
                    Alert.alert(
                        "System Error",
                        "Error requesting data. Error Details: \n" + error.request
                    );
                } else {
                    Alert.alert(
                        "System Error",
                        "Error getting data. Error Details: \n" + error.message
                    );
                }
            });
    }, [props, update, isFocused]);

    // Right Swipe
    const rightSwipe = (recordID, residentID) => {
        return (
            <TouchableOpacity style={styles.swipeRight} onPress={() =>
                Alert.alert(
                    'Delete Test Record',
                    'Are you sure you want to delete this test record?',
                    [
                        { text: 'Yes', onPress: () => deleteTest(recordID, residentID) },
                        { text: 'Cancel' },
                    ]
                )}>
                <Text>Delete</Text>
            </TouchableOpacity>
        )
    }

    const deleteTest = (recordID, residentID) => {
        let delResponse = deleteTestRecord(recordID, residentID);
        setUpdate('updated');
    }



    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topSegmentGroup}>
                    <View style={styles.topSegmentOne}>
                        <View style={styles.topSegmentOneRow}>
                            <TouchableOpacity style={styles.topSegmentOneColumnFirst} onPress={() => props.navigation.navigate('UpdatePatient', { response })}>
                                <View>
                                    <Image source={require('../assets/patient-1.png')} style={styles.avatar} />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.topSegmentOneColumnSecond}>
                                {(
                                    <View>
                                        <Text style={{ fontSize: 22, color: '#FFFFFF', marginTop: 6, fontWeight: '600' }}>{response?.first_name + ' ' + response?.last_name} </Text>
                                        <Text style={{ fontSize: 16, color: '#FFFFFF', marginTop: 3 }}>{calcNumYears(response.dob) + ' old - ' + response.gender}</Text>
                                        <Text style={{ fontSize: 13, color: '#5298EB', marginTop: 3 }}>Joined {stringifyDate(response.createdAt)}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>

                    <View style={styles.topSegmentTwo}>
                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsOne.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>
                                {latestTestResult ?
                                    latestTestResult?.systolic_pressure + '/' + latestTestResult?.diastolic_pressure :
                                    '0/0'
                                }
                            </Text>
                        </View>

                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsTwo.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>
                                {latestTestResult ?
                                    latestTestResult?.respiratory_rate :
                                    '0'
                                }
                            </Text>
                        </View>

                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsThree.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>
                                {latestTestResult ?
                                    latestTestResult?.heartbeat :
                                    '0'
                                }
                            </Text>
                        </View>

                        <View style={styles.readingCol}>
                            <Image
                                source={require('../assets/patientDetailsFour.png')}
                                style={styles.readingImage}
                            />
                            <Text style={styles.readingText}>
                                {latestTestResult ?
                                    latestTestResult?.blood_oxygen :
                                    '0'
                                }
                            </Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddTestResult", { residentID })}>
                    <View style={{ padding: 10, backgroundColor: '#2B2BED', marginTop: 20, borderRadius: 5 }} >
                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600' }}>Add Test Result</Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.card]}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>Allergies:</Text>
                    <Text style={{ color: '#fff', fontWeight: '300', marginTop: 3 }}>{response.allergies}</Text>

                    <View style={styles.horizontalLine} />
                    <Text style={{ color: '#fff', fontWeight: '700', }}>Conditions:</Text>
                    <Text style={{ color: '#fff', fontWeight: '300', marginTop: 3 }}>{response.conditions}</Text>
                </View>



                {/* ***************************************** 
                        TEST RESULT HISTORY
                 ******************************************** */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>Test Results History</Text>
                </View>

                <View style={{ flex: 1 }}>
                    {patientTests !== undefined ? <FlatList
                        data={patientTests.reverse()}
                        ItemSeparatorComponent={FlatList.ItemSeparatorComponent}
                        keyExtractor={(item) => item._id + ""}
                        renderItem={(item) =>
                            <Swipeable renderRightActions={() => rightSwipe(item.item._id, residentID)}>
                                <TouchableOpacity
                                    style={
                                        item.item.status == 'EMERGENCY' ?
                                            [styles.resultsCard, styles.danger] :
                                            [styles.resultsCard, styles.safe]
                                    }
                                    onPress={() => props.navigation.navigate('UpdateTestResult', { testRecord: item.item, residentID: residentID })}>
                                    <Text style={{ color: '#fff', fontSize: 12, color: '#798083' }}>{stringifyDateLong(item.item.createdAt)}</Text>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, paddingTop: 9, paddingBottom: 9 }}>
                                            <Text style={{ fontWeight: '700', color: '#798083' }}>Results</Text>

                                            <View style={{ flexDirection: 'row', marginTop: 7 }}>
                                                <View style={{ flex: 1 }}>
                                                    <Image source={require('../assets/heartbeat.png')} style={{ height: 20, width: 20 }} />
                                                </View>
                                                <View style={{ flex: 6, marginTop: 3 }}>
                                                    <Text style={{ color: '#FFFFFF' }}>{item.item.systolic_pressure + '/' + item.item.diastolic_pressure} mmHg</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: 'row', marginTop: 7 }}>
                                                <View style={{ flex: 1 }}>
                                                    <Image source={require('../assets/blood.png')} style={{ height: 20, width: 20 }} />
                                                </View>
                                                <View style={{ flex: 6, marginTop: 3 }}>
                                                    <Text style={{ color: '#FFFFFF' }}>{item.item.blood_oxygen} %SpO2</Text>
                                                </View>
                                            </View>

                                        </View>


                                        <View style={{ flex: 1, paddingTop: 25, paddingBottom: 9 }}>
                                            <View style={{ flexDirection: 'row', marginTop: 7 }}>
                                                <View style={{ flex: 1 }}>
                                                    <Image source={require('../assets/lungs.png')} style={{ height: 20, width: 20 }} />
                                                </View>
                                                <View style={{ flex: 5, marginTop: 4 }}>
                                                    <Text style={{ color: '#FFFFFF' }}>{item.item.respiratory_rate} Breaths/min</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: 'row', marginTop: 7 }}>
                                                <View style={{ flex: 1 }}>
                                                    <Image source={require('../assets/heartbeat.png')} style={{ height: 20, width: 20 }} />
                                                </View>
                                                <View style={{ flex: 5, marginTop: 4 }}>
                                                    <Text style={{ color: '#FFFFFF' }}>{item.item.heartbeat} Beats/min</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>

                                    <View style={{ marginTop: 7 }}>
                                        <Text style={{ fontWeight: '700', color: '#798083' }}>Notes/Observations</Text>
                                        <Text style={{ color: '#FFFFFF', marginTop: 5 }}>{item.item.notes}</Text>
                                    </View>

                                    <View style={styles.horizontalLine} />

                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../assets/nurse.png')} style={styles.nurseAvatar} />
                                        </View>
                                        <View style={{ flex: 4 }}>
                                            <Text style={{ marginTop: 10, fontSize: 16, color: '#fff', fontWeight: '500' }}>{item.item.health_worker?.name}</Text>
                                            <Text style={{ color: '#B4B4B4', fontSize: 13 }}>{item.item.health_worker?.job_title}</Text>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </Swipeable>
                        }>

                    </FlatList>

                        :

                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#fff' }}>Loading...</Text>
                        </View>


                    }

                </View>
            </View >
        </View >
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
        borderRadius: 50,
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
        height: 45,
        width: 45,
        borderRadius: 50,
        marginTop: 7,
    },
    cardCol: {
        flexDirection: 'row',
        marginTop: 7,
    },
    swipeRight: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BF4C4C',
        marginTop: 17,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        padding: 5,
    }
})