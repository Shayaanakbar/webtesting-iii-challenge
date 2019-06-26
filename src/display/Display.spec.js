import React from 'react';
import { render,  cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('<Display />', () => {
  it('should display if gate is closed', () => {
    const { getByText } = render(<Display closed={true}/>)
    expect(getByText(/Closed/i)).toBeInTheDocument();
  });

  it('should display that the gate is opened if it is unlocked', () => {
    const { getByText } = render(<Display closed={false}/>)
    expect(getByText(/Open/i)).toBeInTheDocument();
  });
})