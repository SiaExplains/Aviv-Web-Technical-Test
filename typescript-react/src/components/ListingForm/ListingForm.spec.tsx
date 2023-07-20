import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ListingForm from './ListingForm';

describe('<ListingForm />', () => {
  it('Should render the listing form component', () => {
    render(
      <MemoryRouter>
        <ListingForm onSaveProperty={() => {}} />
      </MemoryRouter>,
    );
  });
  it('should render the form with input fields', () => {
    render(<ListingForm onSaveProperty={() => {}} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/area/i)).toBeInTheDocument();
    // Add more assertions for other input fields
  });

  it('should update the input fields when the user types', () => {
    render(<ListingForm onSaveProperty={() => {}} />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const priceInput = screen.getByLabelText(/price/i) as HTMLInputElement;
    const areaInput = screen.getByLabelText(/area/i) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'Test Listing' } });
    fireEvent.change(priceInput, { target: { value: '1000' } });
    fireEvent.change(areaInput, { target: { value: '120' } });

    expect(nameInput.value).toBe('Test Listing');
    expect(priceInput.value).toBe('1000');
    expect(areaInput.value).toBe('120');
  });
});
