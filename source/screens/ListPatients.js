import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused, useRoute } from '@react-navigation/native';
import Moment from 'moment';
import { React, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { getAllPatients } from '../api/api';
import AppSearchInputField from '../components/AppSearchInputField';
import CustomBottomNav from '../components/CustomBottomNav';
import HealthStatus from '../components/HealthStatus';
import { calcNumYears, stringifyDate } from '../components/MomentStringify';

function ListPatients(props) {
    let [isLoading, setIsLoading] = useState(true);
    let [response, setResponse] = useState([]);
    let [searchTerm, setSearchTerm] = useState();
    let [filter, setFilter] = useState(false);
    const isFocused = useIsFocused();

    // For Search on change text
    const searchList = useCallback((text) => {
        const tempList = [...response];

        const newList = tempList.filter(list => {
            const regex = new RegExp(`^${text}`, 'gi')

            return list.first_name.match(regex)
        })

        setResponse(newList);

    }, [response]);

    // Fetch list of all patients from api
    useEffect(() => {
        getAllPatients()
            .then(
                (result) => {
                    setIsLoading(false);
                    setResponse(result);
                }
            )
            .catch(function (error) {
                if (props.testing !== undefined) {
                    return;
                }
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
    }, [props, isFocused]);

    // Filter Emergency
    const filterEmergency = useCallback(() => {
        const tmpList = [...response];

        const emergencyList = tmpList.filter(tmpList => tmpList.health_status == 'EMERGENCY' || tmpList.health_status == 'NEEDS_MONITORING');

        setFilter(true);
        setResponse(emergencyList);

    }, [response]);


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 5 }}>
                        {props.testing === undefined ?
                            <AppSearchInputField onChangeText={(search) => searchList(search)} placeholder={"Search for patient here ..."} />
                            :
                            <></>
                        }

                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={styles.filterView} >
                            {props.testing === undefined ?
                                <Ionicons name="filter-outline" size={20} color="white" onPress={() => filterEmergency()} />
                                :
                                <></>
                            }

                        </View>
                    </View>
                </View>

            </View>

            <View style={styles.bottom}>
                {response == undefined || isLoading == true ?
                    <ActivityIndicator />
                    :
                    <FlatList data={response}
                        ItemSeparatorComponent={FlatList.ItemSeparatorComponent}
                        keyExtractor={(item) => item._id + ""}
                        renderItem={(item) =>
                            <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails', { residentID: item.item._id })}>
                                <View style={[styles.listItem, styles.activityRow]}>
                                    <View style={styles.activityColumnOne}>
                                        {item.item.avatar !== undefined ?
                                            <Image source={{ uri: item.item.avatar }} style={styles.activityAvatar} />
                                            :
                                            <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                                        }

                                    </View>
                                    <View style={styles.activityColumnTwo}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View>
                                                <Text style={styles.activityDescOne}>{item.item.first_name + ' ' + item.item.last_name}</Text>
                                            </View>
                                            {filter === true ?
                                                <HealthStatus status={item.item.health_status} />
                                                :
                                                <></>
                                            }
                                        </View>
                                        <Text style={styles.activityDescTwo}>{calcNumYears(item.item.dob) + ' old - ' + item.item.gender}</Text>
                                        <Text style={styles.activityDescThree}>Joined {stringifyDate(item.item.createdAt)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }>
                    </FlatList>
                }
            </View>

            <View style={styles.navArea}>
                <CustomBottomNav nav={props.navigation} page="listPatients" />
            </View>

        </View>


    );
}

export default ListPatients;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
    },
    top: {
        flex: 2,
        paddingStart: 20,
        paddingEnd: 20,
    },
    bottom: {
        flex: 10,
        paddingStart: 20,
        paddingEnd: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        flex: 1,
        resizeMode: 'contain',
        marginRight: 20,
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: '100%',
    },
    intro: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    caption: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    captionTop: {
        marginTop: 30
    },
    navArea: {
        height: 100,
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 20,
        backgroundColor: '#0A161D',
    },
    tinyText: {
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10
    },
    listItem: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noActivityHeader: {
        color: '#2B4764',
        fontSize: 16,
        marginTop: 15,
        fontWeight: "600",
    },
    noActivityDesc: {
        color: '#2B4764',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 6,
    },
    activityRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    activityAvatar: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    activityColumnOne: {
        flex: 1,
    },
    activityColumnTwo: {
        flex: 3,
    },
    activityDescOne: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
    activityDescTwo: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        marginTop: 2,
    },
    activityDescThree: {
        marginTop: 3,
        color: '#5298EB',
        fontSize: 12,
    },
    activityScrollView: {
        marginBottom: 20
    },
    filterView: {
        backgroundColor: '#172A35',
        borderRadius: 53 / 2,
        width: 53,
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
    }


})