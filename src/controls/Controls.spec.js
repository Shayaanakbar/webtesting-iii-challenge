import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';


describe('<Controls />', () => {
  it('should provide buttons to toggle closed and locked states', () => {
    const { getByText }  = render(<Controls locked={false} closed={false}/>)

    const lockButton = getByText(/lock Gate/i)
    const closeButton = getByText(/close/i)

    expect(lockButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  })

  it('should provide buttons to toggle unlock and open state', () => {
    const { getByText } = render(<Controls locked={true} closed={true}/>)

    const unlockButton = getByText(/unlock Gate/i)
    const openButton = getByText(/open gate/i)

    fireEvent.click(unlockButton)
    fireEvent.click(openButton)

    expect(unlockButton).toBeInTheDocument();
    expect(openButton).toBeInTheDocument();
  })

  it('should expect open gate to be disabled', () => {
    const { getByText } = render(<Controls locked={true} closed={true}/>)

    const closeButton = getByText(/open gate/i)
    const lockButton = getByText(/unlock gate/i)

    fireEvent.click(lockButton);
    fireEvent.click(closeButton);

    expect(getByText(/open gate/i)).toBeDisabled();

  })

  it('should expect the locked toggle button to be disabled if the gate is open', () => {
    const { getByText }  = render(<Controls />)

    expect(getByText(/Lock Gate/i)).toBeDisabled();


  });
});
