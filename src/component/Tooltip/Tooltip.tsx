import { FC, PropsWithChildren, RefObject, useEffect, useState } from "react";
import debounce from "../../utility/debounce/debounce";
import { css } from "../stitches.config";
import { Box } from "../UI";

type Props = {
  title: string;
  toComponentRef?: RefObject<any>;
  id?: string;
  offset?: number;
} & PropsWithChildren;

const ToolTipClass = css({
  position: "absolute",
  minWidth: "50px",
  height: "20px",
  borderRadius: "5px",
  left: 0,
  top: 0,
  background: "white",
  padding: "2px 5px",
  display: "flex",
  justifyContent: "center",
  p: {
    color: "Black",
    margin: 0,
    padding: 0,
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
  const [styles, setStyles] = useState<React.CSSProperties>({
    left: 0,
    top: 0,
    display: "none",
  });

  useEffect(() => {
    if (toComponentRef || id) {
      const component = toComponentRef?.current
        ? toComponentRef.current
        : document.getElementById(id as string);

      if (component instanceof HTMLElement) {
        const { x, y, width, height } = component.getBoundingClientRect();

        component.addEventListener(
          "mouseenter",
          debounce(() => {
            const xCoord = x + width + offset;

            if (window.innerWidth > xCoord) {
              setStyles({
                left: xCoord,
                top: y,
              });
            }
          }, 300)
        );
        component.addEventListener(
          "mouseleave",
          debounce(() => {
            setStyles({ display: "none" });
          }, 300)
        );
      }
    }
  }, []);

  return (
    <Box className={ToolTipClass()} style={styles} id="testIDAS">
      <p>{title}</p>
    </Box>
  );
};
