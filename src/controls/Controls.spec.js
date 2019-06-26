import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should provide buttons to toggle closed and locked states', () => {
    const { getByText }  = render(<Controls locked={false} closed={false}/>)

    const lockButton = getByText(/lock Gate/i)
    const closeButton = getByText(/close/i)

    expect(lockButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
});
