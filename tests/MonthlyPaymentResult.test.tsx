import { render, screen } from '@testing-library/react';
import { extractCents, extractDollars, MonthlyPaymentResult } from '../pages/components/MortgageCalculator/MonthlyPaymentResult'

describe('extractCents', () => {
  it('should correctly extract cents from a number', () => {
    expect(extractCents(123.45)).toBe('45');
    expect(extractCents(987.00)).toBe('00');
    expect(extractCents(456.789)).toBe('79');
  });
});

describe('extractDollars', () => {
  it('correctly extracts dollars from a number without decimal points', () => {
    expect(extractDollars(1000)).toBe('1,000');
  });

  it('correctly extracts dollars from a number with decimal points', () => {
    expect(extractDollars(1234.56)).toBe('1,234');
  });

  it('correctly handles numbers less than 1', () => {
    expect(extractDollars(0.45)).toBe('0');
  });
});

describe('MonthlyPaymentResult', () => {
  it('renders loading state correctly', () => {
    render(<MonthlyPaymentResult loading={true} error={null} data={null} />);
    const circularProgressElement = screen.getByTestId('circular-progress');
    expect(circularProgressElement).toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    render(<MonthlyPaymentResult loading={false} error={new Error('There was a problem calculating your mortgage. Please check your inputs')} data={null} />);
    expect(screen.getByText("There was a problem calculating your mortgage. Please check your inputs")).toBeInTheDocument();
  });

  it('renders data correctly', () => {
    render(<MonthlyPaymentResult loading={false} error={null} data={123.45} />);
    expect(screen.getByText(/123/)).toBeInTheDocument();
    expect(screen.getByText(/45/)).toBeInTheDocument();
  });
});