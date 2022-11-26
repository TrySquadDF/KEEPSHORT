import { render } from "@testing-library/react";
import Input from "./Input";

describe("test Input", () => {
  it("test input", () => {
    const { getByTestId } = render(<Input data-testid="test" />);
    const element = getByTestId("test");
    expect(element.tagName).toBe("INPUT");
  });

  it("test props", () => {
    const { getByText } = render(
      <Input data-testid="test" lable="testLable" />
    );
    const element = getByText("testLable");
    expect(element.tagName).toBe("LABEL");
  });
});
