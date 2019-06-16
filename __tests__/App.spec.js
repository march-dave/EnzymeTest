/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

let wrapper;

beforeEach(() => {
  wrapper  = shallow(<App />)
} )

it('jsfld' , () => {
  expect(wrapper.find('#hello')).toHaveLength(1)
})

it('renders correctly', () => {
  renderer.create(<App />);
});
