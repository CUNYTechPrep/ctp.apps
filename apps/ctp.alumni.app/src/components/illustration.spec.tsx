import { render } from '@testing-library/react';

import { Illustration } from './illustration';

describe('Illustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Illustration />);
    expect(baseElement).toBeTruthy();
  });
});
