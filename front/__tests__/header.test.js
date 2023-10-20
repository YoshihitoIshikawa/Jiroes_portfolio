import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PrimarySearchAppBar from './header';

describe ("Header Component", () => {
  test('should render header component', () => {
    render(<PrimarySearchAppBar/>)

    expect(screen.getByText("JIROES")).toBeInTheDocument()
  })
})
