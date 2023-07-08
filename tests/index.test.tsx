import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    const headerElement = screen.getByText('Get started with Digital Credit Experience');
    expect(headerElement).toBeInTheDocument();

    const subheaderElement = screen.getByText('Qualify or apply your mortgage in minutes');
    expect(subheaderElement).toBeInTheDocument();
  });
});