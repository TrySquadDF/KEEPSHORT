import { act, render } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { Popup } from "./Popup";

let container: HTMLDivElement;

describe("test Popup", () => {
  const test = "test";

  it("Popup active", () => {
    const { getByTestId } = render(
      <Popup isOpen={true} children={<div data-testid={test} />} />
    );

    expect(document.body.childElementCount).toBe(2);
    expect(getByTestId(test)).toBeTruthy();
  });

  it("Popup not active", () => {
    const {} = render(<Popup children={<div data-testid={test} />} />);
  });

  expect(document.body.childElementCount).toBe(0);
});
