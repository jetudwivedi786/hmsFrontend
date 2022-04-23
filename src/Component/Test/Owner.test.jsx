import React from 'react';


import renderer from 'react-test-renderer';
import Owner from '../OwnerService/Owner.jsx';



const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), Link: () => mockedUsedNavigate,


}));




afterAll(() => {

    jest.clearAllMocks();

});




test("renders correctly", () => {

    const tree = renderer.create(<Owner />).toJSON();
    console.log("Owner " + tree);

    expect(tree).not.toBe(null);

});