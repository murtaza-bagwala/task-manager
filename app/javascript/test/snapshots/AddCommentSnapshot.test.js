import React from 'react';
import renderer from 'react-test-renderer';
import { AddComment } from '../../components/AddComment';

it('renders AddComment Successfully', () => {
  const tree = renderer.create(<AddComment />);
  expect(tree).toMatchSnapshot();
});
