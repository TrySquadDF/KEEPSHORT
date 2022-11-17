import { styled } from "../../stitches.config";

export const Button = styled("button", {
  margin: "0",
  padding: "0",
  outline: "none",
  border: "none",
  background: "none",
  cursor: "pointer",
  variants: {
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
    },
  },
});
