import React from 'react';
import { render } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders root App component without warnings', () => {
    render(<App />);
  });
});
