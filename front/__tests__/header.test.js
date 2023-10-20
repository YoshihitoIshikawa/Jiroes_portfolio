import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

import PrimarySearchAppBar from '../components/header';

describe ("Header Component", () => {
  test('should render header component', () => {
    render(<PrimarySearchAppBar/>)

    expect(screen.getByText("JIROES")).toBeInTheDocument()
  })
})
