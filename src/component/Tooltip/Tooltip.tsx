import {
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import debounce from "../../utility/debounce/debounce";
import { css } from "../stitches.config";
import { Box } from "../UI";

type Props = {
  title: string;
  toComponentRef?: RefObject<any>;
  id?: string;
  offset?: number;
  position?: "alignX" | "alignY";
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
  position = "alignY",
}) => {
  const ToolTipRef = useRef<HTMLDivElement>(null);
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

        console.log(component.getBoundingClientRect());

        component.addEventListener(
          "mouseenter",
          debounce(() => {
            const xCoord = x + width + offset;
            const yCoord = y + height + offset;
            const ToolTipSize = ToolTipRef?.current?.getBoundingClientRect();

            if (
              position === "alignY" &&
              ToolTipSize &&
              window.innerWidth > xCoord + ToolTipSize.width
            ) {
              setStyles({
                left: xCoord,
                top: y + ToolTipSize.height / 2 - height,
              });
            } else if (
              position === "alignX" &&
              ToolTipSize &&
              window.innerWidth > xCoord + ToolTipSize.width &&
              window.innerHeight > yCoord + ToolTipSize.height
            ) {
              setStyles({
                left: xCoord, //  y + ToolTipSize.width / 2 - height
                top: y + ToolTipSize.width / 2 - height,
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
    <Box className={ToolTipClass()} style={styles} ref={ToolTipRef}>
      <p>{title}</p>
    </Box>
  );
};
