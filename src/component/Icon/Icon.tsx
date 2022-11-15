import { FC, HTMLAttributes, useState } from "react";
import { css } from "../stitches.config";
import { Box } from "../UI/Box/Box";
import cn from "classnames";

const menuIcon = css({
  position: "relative",
  width: "50px",
  height: "50px",
  cursor: "pointer",
  "&.active": {
    span: {
      "&:first-of-type": {
        transform: "rotate(45deg)",
        top: "5px",
      },
      "&:last-of-type": {
        transform: "rotate(-45deg)",
        bottom: "5px",
      },
    },
  },
  div: {
    margin: "auto",
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    width: "22px",
    height: "12px",
    span: {
      position: "absolute",
      display: "block",
      width: "100%",
      height: "2px",
      backgroundColor: "var(--bar-bg, #000)",
      borderRadius: "1px",
      transition: "all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)",

      "&:first-of-type": {
        top: 0,
      },
      "&:last-of-type": {
        bottom: 0,
      },
    },
  },
});

const BurgerMenu: FC<{ active?: boolean } & HTMLAttributes<HTMLDivElement>> = ({
  active = false,
  ...args
}) => {
  return (
    <Box className={cn(menuIcon(), active && "active")} {...args}>
      <Box>
        <span></span>
        <span></span>
      </Box>
    </Box>
  );
};

export default BurgerMenu;
