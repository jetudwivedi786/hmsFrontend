import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../HomePageComponents/Header.jsx';

it('renders correctly', () => {

    const tree = renderer

        .create(<Header />)

        .toJSON();

    console.log(tree)

    expect(tree).toMatchSnapshot();

});