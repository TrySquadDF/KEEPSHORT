import {
  createEvent,
  fireEvent,
  render,
  renderHook,
} from "@testing-library/react";
import Test from "./test.drag-drop";
import { useDragonDrop } from "./useDragonDrop";

describe("DragonDrop", () => {
  it("hooks returns everything you need", () => {
    const { result } = renderHook(() => useDragonDrop());

    expect(result.current.id === "draggable").toBeTruthy();
    expect(typeof result.current.onMouseUp).toBe("function");
    expect(typeof result.current.onMouseDown).toBe("function");
    expect(typeof result.current.onMouseLeave).toBe("function");
    expect(
      typeof result.current.onMouseMove === undefined || "function"
    ).toBeTruthy();
  });

  it("We use a hook on the component", async () => {
    const { getByTestId } = render(<Test />);

    const element = getByTestId("test");

    fireEvent.mouseDown(element, {
      clientY: 150,
      clientX: 400,
    });
    fireEvent.mouseMove(element, {
      clientY: 200,
      clientX: 520,
    });
    fireEvent.mouseUp(element);
    const snapShootAfterMouseEvent = getByTestId("test");

    expect(snapShootAfterMouseEvent.style.zIndex).toBe("1"); // the fireEvent does not support its nativeEvent, because of this, the position cannot be set
    expect(snapShootAfterMouseEvent.id).toBe("draggable");
  });
});
