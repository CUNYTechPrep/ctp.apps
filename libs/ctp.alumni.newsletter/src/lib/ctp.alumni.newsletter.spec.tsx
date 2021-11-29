/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { CtpAlumniNewsletter } from './ctp.alumni.newsletter'


  describe('CtpAlumniAdvice', () => {
    it('should render successfully', async () => {
      const  baseElement  = CtpAlumniNewsletter();
      expect(baseElement).toBeTruthy(); 
    });
  })

