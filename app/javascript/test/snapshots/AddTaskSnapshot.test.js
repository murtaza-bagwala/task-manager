import React from 'react';
import renderer from 'react-test-renderer';
import { AddTask } from '../../components/AddTask';

it('renders AddTask Successfully', () => {
  const tree = renderer.create(<AddTask />);
  expect(tree).toMatchSnapshot();
});
