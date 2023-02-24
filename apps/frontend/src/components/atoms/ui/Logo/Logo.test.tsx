import { render, screen } from "@testing-library/react"
import { Logo } from "./Logo"


describe('logo', () => {
  test('render', () => {
    render(<Logo />)
    
    expect(screen.queryByTestId('test')).not.toBeNull();
  });
});