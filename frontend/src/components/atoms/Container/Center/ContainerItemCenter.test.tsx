import { render, screen } from "@testing-library/react"
import { ContainerItemCenter } from "./ContainerItemCenter";

describe('logo', () => {
  test('render', () => {
    render(
      <ContainerItemCenter>
        <p data-testid='test'>test</p>
      </ContainerItemCenter>
    )
    
    expect(screen.queryByTestId('test')).not.toBeNull();
  });
});