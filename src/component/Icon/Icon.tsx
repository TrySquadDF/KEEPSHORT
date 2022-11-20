import { FC, HTMLAttributes, useState } from "react";
import { css, styled } from "../stitches.config";
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

export const Add = styled(
  "i",
  {
    boxSizing: "border-box",
    position: "relative",
    display: "block",
    width: "22px",
    height: "22px",
    border: "2px solid",
    transform: "scale(var(--ggs,1))",
    borderRadius: "22px",
    "&::after , &::before": {
      content: "",
      display: "block",
      boxSizing: "border-box",
      position: "absolute",
      width: "10px",
      height: "2px",
      background: "currentColor",
      borderRadius: "5px",
      top: "8px",
      left: "4px",
    },
  },
  {
    "&::after": {
      width: "2px",
      height: "10px",
      top: "4px",
      left: "8px",
    },
  }
);

export const EditMarker = styled(
  "i",
  {
    boxSizing: "border-box",
    position: "relative",
    display: "block",
    transform: "scale(var(--ggs,1))",
    width: "22px",
    height: "22px",
    border: "2px solid",
    borderRadius: "22px",
    overflow: "hidden",
    perspective: "20px",
    "&::after , &::before": {
      content: "",
      display: "block",
      position: "absolute",
      boxSizing: "border-box",
    },
  },
  {
    "&::before": {
      width: "0",
      height: " 6px",
      borderBottom: " 6px solid",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      bottom: "9px",
      left: "6px",
    },
    "&::after": {
      width: "10px",
      height: "12px",
      border: "2px solid",
      borderTop: "4px solid",
      borderBottom: "0",
      bottom: "0",
      left: "4px",
      transform: "rotateX(60deg)",
    },
  }
);

export default BurgerMenu;
