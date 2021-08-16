import { render } from '@testing-library/react';

import CtpAlumniAdvice from './ctp.alumni.advice';

describe('CtpAlumniAdvice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtpAlumniAdvice />);
    expect(baseElement).toBeTruthy();
  });
});
