import React from "react";



import renderer from "react-test-renderer";
import Header from "../HomePageComponents/Header";




const mockedUsedNavigate = jest.fn();



jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), useNavigate: () => mockedUsedNavigate,

}));



afterAll(() => {

    jest.clearAllMocks();

});




test("renders correctly", () => {

    const tree = renderer.create(<Header />).toJSON();

    expect(tree).not.toBe(null);

});