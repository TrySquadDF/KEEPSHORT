import React, { FC, RefObject, ReactNode } from "react";
import { Popup } from "../Popup/Popup";
import { css } from "../stitches.config";
import { Box } from "../UI";

import cn from "classnames";
import { useEventListener } from "usehooks-ts";
import { CSSProperties } from "@stitches/react";

type props = {
  backDropControll: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  items: { content: ReactNode; ReadOnly: boolean }[];
  refTrigger?: RefObject<HTMLDivElement> | RefObject<HTMLButtonElement>;
  coords?: { x: number; y: number };
  offset?: number;
  size?: number;
};

const styles = css({
  minHeight: "50px",
  borderRadius: "10px",
  background: "#2b2b30",
  filter: "drop-shadow(rgba(0,0,0,.3) 0px 0px 8px)",
  padding: "10px",
  ":nth-child(n)": {
    borderRadius: "10px",
  },
});

const wrapper = css({
  height: "50px",
  ":nth-child(n)": {
    borderRadius: "10px",
  },
});

/**
 * @param параметры типа: `ref` или `coords` — опциональны, в случае если указан параметр - `ref`, параметр `coords` будет проигнорирован.
 */
export const BackDrop: FC<props> = ({
  backDropControll: [isOpen, setOpen],
  refTrigger,
  offset = 5,
  size = 130,
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
      console.log(refTrigger.current.getBoundingClientRect());
      const { top, left, height, width } =
        refTrigger.current.getBoundingClientRect();
      styles = {
        top: `${top + height + offset}px`,
        left: `${left - size + width}px`,
      };
    }

    return css({ ...styles })();
  };

  const sizeStyles = css({ width: `${size}px` });

  return (
    <Popup
      isOpen={isOpen}
      className={cn(styles(), "backdrop", stylesInline(), sizeStyles())}
    >
      <Box className={wrapper()}>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        ></div>
      </Box>
    </Popup>
  );
};
