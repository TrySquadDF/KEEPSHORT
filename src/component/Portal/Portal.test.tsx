import { act } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import Portal from "./Portal";

let container: HTMLDivElement;

describe("test portal", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("test portal and props", () => {
    const id = "data_test_DIV_PORTAL";
    const classPortal = "testprops";

    act(() => {
      ReactDOM.createRoot(container).render(
        <Portal classname={classPortal} children={<div id={id} />} />
      );
    });

    const element = document.getElementById(id);
    const portal = document.getElementsByClassName(classPortal);

    expect(element?.nodeName).toBe("DIV");
  });
});
