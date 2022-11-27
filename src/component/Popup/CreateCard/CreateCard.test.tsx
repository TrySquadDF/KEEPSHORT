import CreateCardPopup from "./ReactTest";
import { fireEvent, render } from "@testing-library/react";
import store from "../../../store/store";

describe("CreateCard/Popup", () => {
  it("init Popup", () => {
    const { getByTestId } = render(<CreateCardPopup open={true} />);

    expect(getByTestId("title_testid")).toBeInTheDocument();
    expect(getByTestId("textarea_testid")).toBeInTheDocument();
    expect(getByTestId("create_button_testid")).toBeInTheDocument();
  });

  it("Popup false", () => {
    const { queryByTestId } = render(<CreateCardPopup open={false} />);

    expect(queryByTestId("Popup_card_testid")).toBeNull();
  });

  it("test color-ramp", () => {
    const { getByTestId, queryByTestId } = render(
      <CreateCardPopup open={true} />
    );

    const buttonColorRamp = getByTestId("button_active_colorRamp_testid");

    expect(queryByTestId("colorRamp_testid")).toBeNull();

    fireEvent.click(buttonColorRamp);

    const colorRamp = getByTestId("colorRamp_testid");
    expect(colorRamp).toBeInTheDocument();
  });

  it("test from", () => {
    const title = "testtitle";
    const body = "testbody";

    const { getByTestId, queryByTestId } = render(
      <CreateCardPopup open={true} />
    );

    expect(store.listCard().length).toBe(0);

    fireEvent.input(getByTestId("title_testid"), {
      target: {
        value: title,
      },
    });

    fireEvent.input(getByTestId("textarea_testid"), {
      target: {
        value: body,
      },
    });

    fireEvent.click(getByTestId("create_button_testid"));

    expect(store.listCard().length).toBe(1);
    expect(store.listCard()[0].Text).toBe(title);
    expect(store.listCard()[0].content).toBe(body);
    expect(store.listCard()[0].styles?.backgroundColor).toBe(
      "hsl(0, 100%, 100%)"
    );
  });
});
