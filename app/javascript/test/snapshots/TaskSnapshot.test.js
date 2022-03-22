import React from 'react';
import renderer from 'react-test-renderer';
import { Task } from '../../components/Task';

it('renders Task Successfully', () => {
  const tree = renderer.create(<Task task={{ id: 1, content: 'cook Meal' }} />);
  expect(tree).toMatchSnapshot();
});
