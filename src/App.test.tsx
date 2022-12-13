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
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);

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

  it("Checking component functionality", async () => {
    act(() => {
      ReactDOM.createRoot(root).render(<App />);
    });

    fireEvent.click(
      document.querySelector(
        "[data-testid='button_open-create-popup_testid']"
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

    expect(card).toBeInTheDocument();
  });
});
