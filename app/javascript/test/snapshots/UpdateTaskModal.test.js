import React from 'react';
import renderer from 'react-test-renderer';
import { UpdateTaskModal } from '../../components/UpdateTaskModal';

it('renders UpdateTaskModal Successfully', () => {
  const tree = renderer.create(<UpdateTaskModal selectedTask={{}} />);
  expect(tree).toMatchSnapshot();
});
