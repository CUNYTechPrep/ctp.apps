import { render } from '@testing-library/react';

import { ColorModeSwitcher } from './color-mode-switcher';

describe('ColorModeSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorModeSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
