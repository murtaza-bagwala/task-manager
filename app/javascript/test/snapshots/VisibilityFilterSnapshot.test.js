import React from 'react';
import renderer from 'react-test-renderer';
import { VisibilityFilters } from '../../components/VisibilityFilter';

it('renders VisibilityFilter Successfully', () => {
  const tree = renderer.create(
    <VisibilityFilters />,
  );
  expect(tree).toMatchSnapshot();
});
