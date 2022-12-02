import React, {
  MouseEventHandler,
  TouchEventHandler,
  useRef,
  useState,
} from "react";

type props<T> = {
  onMouseDown: (e: React.MouseEvent<T, MouseEvent>) => void;
  onMouseUp: (e: React.MouseEvent<T, MouseEvent>) => void;
  onMouseMove: ((e: React.MouseEvent<T, MouseEvent>) => void) | undefined;
  onMouseLeave: (e: React.MouseEvent<T, MouseEvent>) => void;
  onTouchMove: (e: React.TouchEvent<T>) => void;
  onTouchStart: (e: React.TouchEvent<T>) => void;
  id: string;
};

/** Возвращает перечень событий: `onMouseDown`, `onMouseUp`, `onMouseMove`,
 *  `onMouseLeave`, `onTouchMove`, `onTouchStart`,
 *  что контролируют позицию элемента черезе css свойства: top , left.*/

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
    const element = e.nativeEvent
      .composedPath()
      //@ts-ignore
      .find((element) => element.id === "draggable" && true);

    setLink(element);

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

  const onTouchMove: TouchEventHandler<T> = (e) => {
    //@ts-ignore
    if (link && link.style) {
      //@ts-ignore
      link.style.top = e.targetTouches[0].pageY - coords?.y + "px";
      //@ts-ignore
      link.style.left = e.targetTouches[0].pageX - coords?.x + "px";
    }
  };

  const onTouchStart: TouchEventHandler<T> = (e) => {
    const element = e.nativeEvent
      .composedPath()
      //@ts-ignore
      .find((element) => element.id === "draggable" && true);

    setLink(element);

    if (link) {
      //@ts-ignore
      link.style.zIndex = "2";
    }

    //@ts-ignore
    const rect = e.target.getBoundingClientRect();

    setCords({
      y: e.targetTouches[0].pageY - rect.top,
      x: e.targetTouches[0].pageX - rect.left,
    });
  };

  return {
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave,
    onTouchMove,
    onTouchStart,
    id: "draggable",
  };
}
