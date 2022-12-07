import React, { DOMAttributes, FC, RefObject } from "react";
import { Popup } from "../Popup/Popup";
import { css } from "../stitches.config";
import { Box } from "../UI";

import cn from "classnames";
import { useEventListener } from "usehooks-ts";
import { CSSProperties } from "@stitches/react";

type props = {
  backDropControll: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  items: {
    content: string;
    ReadOnly: boolean;
    props?: Omit<Omit<DOMAttributes<HTMLDivElement>, "children">, "className">;
  }[];
  refTrigger?: RefObject<HTMLDivElement> | RefObject<HTMLButtonElement>;
  position?: { x: number; y: number };
  offset?: number;
  size?: number;
};

const styles = css({
  minHeight: "34px",
  borderRadius: "10px",
  background: "#2b2b30",
  filter: "drop-shadow(rgba(0,0,0,.3) 0px 0px 8px)",
  padding: "10px",
  userSelect: "none",
  ":nth-child(n)": {
    fontSize: "14px",
    borderRadius: "5px",
    padding: "5px",
  },
  ".item": {
    "&:hover": {
      background: "rgba(255,255,255,0.05)",
      cursor: "pointer",
    },
  },
});

const stylesItem = css({
  minHeight: "24px",
  maxHeight: "48px",
});

/**
 * @param параметры типа: `ref` или `coords` — опциональны, в случае если указан параметр - `ref`, параметр `coords` будет проигнорирован.
 */
export const BackDrop: FC<props> = ({
  backDropControll: [isOpen, setOpen],
  refTrigger,
  offset = 5,
  size = 170,
  position,
  items,
}) => {
  useEventListener("pointerdown", (e) => {
    if (isOpen && e.target instanceof HTMLDivElement) {
      const copmonent = e.composedPath().find((el) => {
        if (el instanceof HTMLDivElement) {
          return el.className.match(/backdrop/) ? true : false;
        }
      });

      if (copmonent === undefined) {
        setTimeout(() => {
          if (isOpen) {
            setOpen(false);
          }
        }, 0);
      }
    }
  });

  const stylesInline = () => {
    let styles: CSSProperties = {};

    if (refTrigger && refTrigger.current) {
      const { top, left, height, width } =
        refTrigger.current.getBoundingClientRect();
      styles = {
        top: `${top + height + offset}px`,
        left: `${left - size + width - offset * 2}px`,
      };
    } else if (position && position.x && position.y) {
      styles = { top: `${position.y}px`, left: `${position.y}px` };
    }

    return css({ ...styles })();
  };

  const sizeStyles = css({ width: `${size}px` });

  return (
    <Popup
      isOpen={isOpen}
      className={cn(styles(), "backdrop", stylesInline(), sizeStyles())}
      children={
        <>
          {items.map((element) => {
            return (
              <Box
                className={cn(
                  stylesItem(),
                  element.ReadOnly === false ? "item" : undefined
                )}
                children={element.content}
                {...element.props}
              />
            );
          })}
        </>
      }
    />
  );
};
