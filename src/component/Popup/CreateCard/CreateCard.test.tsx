import CreateCardPopup from "./ReactTest";
import { render } from "@testing-library/react";

describe("CreateCard/Popup", () => {
  it("init Popup", () => {
    const { getByTestId } = render(<CreateCardPopup open={true} />);

    expect(getByTestId("title_testid")).toBeTruthy();
    expect(getByTestId("textarea_testid")).toBeTruthy();
    expect(getByTestId("create_button_testid")).toBeTruthy();
  });

  it("test color-ramp", () => {
    const { getByTestId } = render(<CreateCardPopup open={true} />);
  });
});
