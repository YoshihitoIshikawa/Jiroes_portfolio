import { render, screen } from '@testing-library/react';

import Footer from './footer';

describe("Footer Component", () => {
  let component;

  beforeEach(() => {
    component = render(<Footer />);
  });

  afterEach(() => {
    component.unmount();
  });

  test('should render the footer component', () => {
    expect(component.container.innerHTML).toContain("Yoshihito");
  });
});
