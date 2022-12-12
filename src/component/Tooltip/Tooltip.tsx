import { FC, PropsWithChildren, RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { css } from "../stitches.config";
import debounce from "../../utility/debounce/debounce";
import getDevice from "../../utility/getDevice/getDevice";

type Props = {
  title: string;
  toComponentRef?: RefObject<any>;
  id?: string;
  offset?: number;
} & PropsWithChildren;

const ToolTipPosition = css({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  left: 0,
  top: 0,
});

const ToolTipClass = css({
  justifyContent: "center",
  p: {
    minWidth: "50px",
    maxHeight: "20px",
    borderRadius: "5px",
    background: "white",
    padding: "3px 5px",
    display: "flex",
    alignItems: "center",
    color: "Black",
    margin: 0,
    size: "max-content",
    fontWeight: "500",
  },
});

export const ToolTip: FC<Props> = ({
  children,
  title,
  toComponentRef,
  id,
  offset = 10,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [styles, setStyles] = useState<React.CSSProperties>({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    if ((toComponentRef || id) && getDevice(navigator) === "PC") {
      const component = toComponentRef?.current
        ? toComponentRef.current
        : document.getElementById(id as string);

      if (component instanceof HTMLElement) {
        const { height } = component.getBoundingClientRect();

        setStyles((state) => {
          return { ...state, height: `${height}px` };
        });

        component.addEventListener(
          "mouseenter",
          debounce(() => {
            const { x, y, width } = component.getBoundingClientRect();
            const xCoord = x + width + offset;

            if (window.innerWidth > xCoord) {
              setStyles((state) => {
                return { ...state, left: xCoord, top: y };
              });
              setOpen(true);
            }
          }, 300)
        );
        component.addEventListener(
          "mouseleave",
          debounce(() => {
            setOpen(false);
          }, 300)
        );
      }
    }
  }, []);

  if (isOpen === false) return null;

  return (
    <motion.div className={ToolTipPosition()} style={styles}>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={ToolTipClass()}
      >
        <p>{title}</p>
      </motion.div>
    </motion.div>
  );
};
