import { render, screen } from '@testing-library/react';
import App from './App';

test('renders system shell headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/Password Policy Analyzer & Security Auditor/i);
  expect(headingElement).toBeInTheDocument();
});