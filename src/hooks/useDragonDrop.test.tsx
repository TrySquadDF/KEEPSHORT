import {
  createEvent,
  fireEvent,
  render,
  renderHook,
} from "@testing-library/react";
import { useDragonDrop } from "./useDragonDrop";

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

    const down = createEvent.mouseDown(element, {
      clientX: 10,
      clientY: 20,
      buttons: 1,
    });

    const move = createEvent.mouseMove(element, {
      clientX: 10,
      clientY: 20,
      buttons: 1,
    });

    const up = createEvent.mouseUp(element, {});

    fireEvent(element, down);
    fireEvent(element, move);
  });
});
