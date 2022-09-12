import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Emoji from 'components/Emoji';
import userEvent from '@testing-library/user-event';
import Quotes from 'components/Quotes';

test('renders Quotes header', () => {
  render(<App />);
  const header = screen.getAllByText(/Quotes/i)[0];
  expect(header).toBeInTheDocument();
});

describe('Tests for Emoji component', () => {
  it('should call the onClick when emoji is clicked', () => {
    const mockOnClickFunction = jest.fn();
    render(
      <Emoji
        onClick={mockOnClickFunction}
        symbol='😍'
      />
    );

    userEvent.click(screen.getByText('😍'));
    expect(mockOnClickFunction).toBeCalled();
  });
});

it('Tests for quotes after clicking a favorite button if h2 changes to favorite & if the favorite icon changes', () => {
  render(<Quotes />);
  const emoji = screen.getAllByText('😶')[0];
  // Here you'd want to test before clicking that the Favorites part is not rendered
  expect(screen.queryByText('Favorites')).not.toBeInTheDocument();
  fireEvent.click(emoji);
  // Here you'd want to test if the Favorites part is rendered and if the emoji changes
  expect(screen.getAllByText('Favorites')[0]).toBeInTheDocument();
  expect(screen.getAllByText('😍')[0]).toBeInTheDocument();
});
