import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock("@react-navigation/core");
import { useRoute } from "@react-navigation/core";

import AddPatient from '../AddPatient';
import AddTestResult from '../AddTestResult';
import Login from '../Login';
import ListPatients from '../ListPatients';
import UpdateTestResult from '../UpdateTestResult';
import UpdatePatient from '../UpdatePatient';

jest.useFakeTimers();

describe('<Login />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});

describe('<AddPatient />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<AddPatient testing="true" />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});

describe('<AddTestResult />', () => {
    it('has 1 child', () => {
        useRoute.mockReturnValue({
            params: {
                residentID: "residentID"
            }
        });

        const tree = renderer.create(<AddTestResult />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});

describe('<ListPatients />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<ListPatients testing="true" />).toJSON();
        expect(tree.children.length).toBe(3);
    });
});

describe('<UpdateTestResult />', () => {
    it('has 1 child', async () => {
        useRoute.mockReturnValue({
            params: {
                residentID: "residentID",
                testRecord: {
                    _id: "_id"
                }
            }
        });

        const tree = renderer.create(<UpdateTestResult />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});

describe('<UpdatePatient />', () => {
    it('has 1 child', async () => {
        useRoute.mockReturnValue({
            params: {
                residentID: "residentID",
                response: {
                    _id: "6375b2d1a8332a3d110ea9a0",
                    first_name: "Raina",
                    last_name: "Tera",
                    gender: "Female",
                    dob: "2022-01-02T17:08:13.930Z",
                    conditions: "HIC",
                    allergies: "Water",
                    tests: [
                    ],
                    createdAt: "2022-11-17T04:04:33.130Z",
                    updatedAt: "2022-12-07T02:15:51.030Z",
                    __v: 30,
                    health_status: "NORMAL"
                }
            }
        });

        const tree = renderer.create(<UpdatePatient testing="true" />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});



