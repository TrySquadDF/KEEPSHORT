import { MouseEventHandler, useState } from "react";

type props<T> = {
  onMouseDown: (e: React.MouseEvent<T, MouseEvent>) => void;
  onMouseUp: (e: React.MouseEvent<T, MouseEvent>) => void;
  onMouseMove: ((e: React.MouseEvent<T, MouseEvent>) => void) | undefined;
  onMouseLeave: (e: React.MouseEvent<T, MouseEvent>) => void;
  id: string;
};

export function useDragonDrop<T = HTMLDivElement>(): props<T> {
  const [state, setState] = useState<boolean>(false);
  const [coords, setCords] = useState<null | { x: number; y: number }>();
  const [link, setLink] = useState<EventTarget | undefined>(undefined);

  const moveAt = (e: React.MouseEvent<T, MouseEvent> | MouseEvent) => {
    //@ts-ignore
    if (link && link.style) {
      //@ts-ignore
      link.style.top = e.pageY - coords?.y + "px";
      //@ts-ignore
      link.style.left = e.pageX - coords?.x + "px";
    }
  };

  const onMouseDown: MouseEventHandler<T> = (e) => {
    setLink(
      e.nativeEvent
        .composedPath()
        //@ts-ignore
        .find((element) => element.id === "draggable" && true)
    );

    if (link) {
      //@ts-ignore
      link.style.zIndex = "2";
    }

    setCords({
      y: e.nativeEvent.offsetY,
      x: e.nativeEvent.offsetX,
    });

    setState(true);
  };
  const onMouseUp: MouseEventHandler<T> = (e) => {
    //@ts-ignore
    if (link) link.style.zIndex = "1";

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

  return { onMouseDown, onMouseUp, onMouseMove, onMouseLeave, id: "draggable" };
}
