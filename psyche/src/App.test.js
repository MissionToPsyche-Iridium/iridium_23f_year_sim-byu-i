import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage with the Psyche heading', () => {
  render(<App />);

  // Look for the heading in the HomePage component
  const headingElement = screen.getByText(/What is Psyche\?/i);
  expect(headingElement).toBeInTheDocument();
});
