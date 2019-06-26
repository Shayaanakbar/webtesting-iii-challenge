import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../display/Display';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('Dashboard renders', () => {
     expect(render(<Dashboard/>)).not.toBeNull();
  });
})