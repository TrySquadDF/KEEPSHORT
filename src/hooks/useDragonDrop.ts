import { CSSProperties } from "@stitches/react";
import { MouseEventHandler, useEffect, useState } from "react";

type props<T> = {
  onMouseDown: (e: React.MouseEvent<T, MouseEvent>) => void;
  onMouseUp: (e: React.MouseEvent<T, MouseEvent>) => void;
  onMouseMove: ((e: React.MouseEvent<T, MouseEvent>) => void) | undefined;
  onMouseLeave: (e: React.MouseEvent<T, MouseEvent>) => void;
};

export function useDragonDrop<T = HTMLDivElement>(): props<T> {
  const [state, setState] = useState<boolean>(false);
  const [coords, setCords] = useState<null | { x: number; y: number }>();

  const moveAt = (e: React.MouseEvent<T, MouseEvent> | MouseEvent) => {
    if (e.target && (e.target.style as CSSProperties)) {
      //@ts-ignore
      e.target.style.top = e.pageY - coords?.y + "px";
      //@ts-ignore
      e.target.style.left = e.pageX - coords?.x + "px";
    }
  };

  const onMouseDown: MouseEventHandler<T> = (e) => {
    if (e.target.style) {
      e.target.style.position = "absolute";
      e.target.style.zIndex = "1000";
    }

    setCords({
      y: e.nativeEvent.offsetY,
      x: e.nativeEvent.offsetX,
    });

    setState(true);
  };
  const onMouseUp: MouseEventHandler<T> = (e) => {
    e.target.style.zIndex = "1";

    setState(false);
  };

  const onMouseLeave: MouseEventHandler<T> = () => {
    setState(false);
  };

  const onMouseMove: MouseEventHandler<T> | undefined = state
    ? (e) => {
        moveAt(e);
      }
    : undefined;

  return { onMouseDown, onMouseUp, onMouseMove, onMouseLeave };
}
