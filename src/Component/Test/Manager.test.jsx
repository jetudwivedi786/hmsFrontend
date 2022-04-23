import React from 'react';


import renderer from 'react-test-renderer';
import Manager from '../ManagerService/Manager';



const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), Link: () => mockedUsedNavigate,


}));





afterAll(() => {

    jest.clearAllMocks();

});




test("renders correctly", () => {

    const tree = renderer.create(<Manager />).toJSON();

    expect(tree).not.toBe(null);

});