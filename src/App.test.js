// Import necessary functions and components for testing
import { render, screen } from '@testing-library/react';
import App from './App';  // Import the main App component

// Test block: Checks if the "learn react" link is rendered on the page
test('renders learn react link', () => {
  render(<App />);  // Render the App component
  const linkElement = screen.getByText(/learn react/i);  // Search for the "learn react" text (case insensitive)
  expect(linkElement).toBeInTheDocument();  // Assert that the element is present in the document
});
