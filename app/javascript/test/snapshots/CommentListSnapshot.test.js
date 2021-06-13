import React from 'react';
import renderer from 'react-test-renderer';
import { CommentList } from '../../components/CommentList';

it('renders CommentList Successfully', () => {
  const tree = renderer.create(<CommentList />);
  expect(tree).toMatchSnapshot();
});
