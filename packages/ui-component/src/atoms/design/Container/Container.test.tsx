import { render, screen } from "@testing-library/react"
import Container from "./Container";

describe('logo', () => {
  test('render', () => {
    render(
      <Container type="center">
        <p data-testid='test'>test</p>
      </Container>
    )
    
    expect(screen.queryByTestId('test')).not.toBeNull();
  });
});