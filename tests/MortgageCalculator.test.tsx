import { render, screen } from '@testing-library/react';
import { MortgageCalculator } from '../pages/components/MortgageCalculator';

describe('mortgage Calculator component', () => {
  it('renders mortgage calculator with default values', () => {
    render(<MortgageCalculator />);
    const purchasePrice = screen.getByText('250,000');
    expect(purchasePrice).toBeInTheDocument();

    const interestRate = screen.getByText('1.5%');
    expect(interestRate).toBeInTheDocument();

    const radioButton = screen.getByLabelText('25 years') as HTMLInputElement;
    expect(radioButton.checked).toBe(true);
  });
});