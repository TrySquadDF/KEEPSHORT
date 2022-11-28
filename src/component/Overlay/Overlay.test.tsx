import { fireEvent, render, cleanup } from "@testing-library/react";

import { Overlay } from "./Overlay";

describe("Overlay test", () => {
  afterEach(cleanup);

  it("init Overlay", async () => {
    const { queryByTestId } = render(
      <Overlay children={<div data-testid="testchildren" />} />
    );

    expect(queryByTestId("testchildren")).toBeInTheDocument();
    expect(queryByTestId("button_open_menu")).toBeInTheDocument();
  });

  it("overlay open", async () => {
    const { getByTestId, queryByTestId } = render(
      <Overlay children={<div data-testid="testchildren" />} />
    );

    fireEvent.click(getByTestId("button_open_menu"));

    const element = queryByTestId("menu_testid");
    expect(element).toBeInTheDocument();

    expect(queryByTestId("Popup_card_testid")).not.toBeInTheDocument();
    fireEvent.click(getByTestId("button_plane_add_testid"));
    expect(queryByTestId("Popup_card_testid")).toBeInTheDocument();
  });
});
