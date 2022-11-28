import { act, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom/client";

import App from "./App";

let root: HTMLDivElement;

//Error: Not implemented: window.computedStyle(elt, pseudoElt) >>> it's all a custom scroll

describe("App compose comonent", () => {
  beforeEach(() => {
    root = document.createElement("div");
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
  });

  it("Initializing the App root component", () => {
    act(() => {
      ReactDOM.createRoot(root).render(<App />);
    });

    expect(
      document.querySelector("[data-testid='root_testid']")
    ).toBeInTheDocument();
    expect(
      document.querySelector("[data-testid='overlay_testid']")
    ).toBeInTheDocument();
  });

  it("Checking component functionality", () => {
    act(() => {
      ReactDOM.createRoot(root).render(<App />);
    });

    fireEvent.click(
      document.querySelector(
        "[data-testid='button_open_menu']"
      ) as HTMLDivElement
    );

    fireEvent.click(
      document.querySelector(
        "[data-testid='button_plane_add_testid']"
      ) as HTMLDivElement
    );

    fireEvent.input(
      document.querySelector(
        "[data-testid='title_testid']"
      ) as HTMLInputElement,
      {
        target: {
          value: "title",
        },
      }
    );

    fireEvent.input(
      document.querySelector(
        "[data-testid='textarea_testid']"
      ) as HTMLInputElement,
      {
        target: {
          value: "body",
        },
      }
    );

    fireEvent.click(
      document.querySelector(
        "[data-testid='create_button_testid']"
      ) as HTMLInputElement
    );

    const card = document.querySelector(
      "[data-testid='card_testid']"
    ) as HTMLDivElement;

    fireEvent.mouseDown(card);
    fireEvent.mouseUp(card);

    fireEvent.mouseDown(card);
    fireEvent.mouseMove(card);
    fireEvent.mouseUp(card);

    expect(card).toBeInTheDocument();
  });
});
