import { styled } from "../../stitches.config";

export const Button = styled("button", {
  margin: "0",
  padding: "0",
  outline: "none",
  border: "none",
  background: "none",
  cursor: "pointer",
  variants: {
    size: {
      primary: {
        center: true,
        padding: "5px",
        maxWidth: "32px",
        maxHeight: "32px",
      },
    },
    variants: {
      them: {
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        fontFamily: "inherit",
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
        transition: "border-color 0.25s",
        "&:hover": {
          borderColor: "#646cff",
        },
        "&:focus , &:focus-visible": {
          outline: "4px auto -webkit-focus-ring-color",
        },
      },
      plane: {
        size: "100%",
        background: "none",
        cursor: "pointer",
        transition: "background-color 0.25s",
        "&:hover": {
          backgroundColor: "rgba(255,255,255 ,0.1)",
        },
      },
      fill: {
        background: "BlueViolet",
        padding: "10px 20px",
        borderRadius: "5px",
        fontWeight: "bolder",
        transition: "0.2s all",
      },
      success: {
        background: "#45ffb1",
        padding: "10px 20px",
        borderRadius: "5px",
        fontWeight: "bolder",
        transition: "0.2s all",
      },
      hover: {
        background: "none",
        borderRadius: "5px",
        fill: "White",
        transition: "background-color 0.25s",
        "&:hover": {
          background: "rgba(255,255,255,0.1)",
        },
      },
    },
  },
});
