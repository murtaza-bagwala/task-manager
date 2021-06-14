import React from 'react';
import renderer from 'react-test-renderer';
import { AddAttachment } from '../../components/AddAttachment';

it('renders AddAttachment Successfully', () => {
  const tree = renderer.create(<AddAttachment />);
  expect(tree).toMatchSnapshot();
});
