import { act, fireEvent, render, renderHook } from "@testing-library/react";
import { useDragonDrop } from "./useDragonDrop";
import userEvent from "@testing-library/user-event";

describe("DragonDrop", () => {
  const { result } = renderHook(() => useDragonDrop());

  it("hooks returns everything you need", () => {
    expect(result.current.id === "draggable").toBeTruthy();
    expect(typeof result.current.onMouseUp).toBe("function");
    expect(typeof result.current.onMouseDown).toBe("function");
    expect(typeof result.current.onMouseLeave).toBe("function");
    expect(
      typeof result.current.onMouseMove === undefined || "function"
    ).toBeTruthy();
  });

  it("We use a hook on the component", async () => {
    const { getByTestId } = render(
      <div {...result.current} data-testid="test" />
    );
    const element = getByTestId("test");

    userEvent.click(element);

    expect(element.id).toBe("draggable");
  });
});
