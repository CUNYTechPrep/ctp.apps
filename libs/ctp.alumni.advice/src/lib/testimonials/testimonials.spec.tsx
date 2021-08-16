import { render } from '@testing-library/react';

import Testimonials from './testimonials';

describe('Testimonials', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testimonials />);
    expect(baseElement).toBeTruthy();
  });
});
