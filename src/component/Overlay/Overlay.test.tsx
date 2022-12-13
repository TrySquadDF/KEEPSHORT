import { fireEvent, render, cleanup } from "@testing-library/react";

import { Overlay } from "./Overlay";

describe("Overlay test", () => {
  afterEach(cleanup);

  it("init Overlay", async () => {
    const { queryByTestId } = render(
      <Overlay children={<div data-testid="testchildren" />} />
    );

    expect(queryByTestId("testchildren")).toBeInTheDocument();
    expect(
      queryByTestId("button_open-create-popup_testid")
    ).toBeInTheDocument();
  });

  it("overlay open", async () => {
    const { getByTestId, queryByTestId } = render(<Overlay />);

    expect(queryByTestId("Popup_card_testid")).not.toBeInTheDocument();
    fireEvent.click(getByTestId("button_open-create-popup_testid"));
    expect(queryByTestId("Popup_card_testid")).toBeInTheDocument();
  });
});
