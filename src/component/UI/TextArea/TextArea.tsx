import { styled } from "../../stitches.config";

export const TextArea = styled("textarea", {
  resize: "none",
  padding: "0",
  margin: "0",
  border: "none",
  outline: "none",

  variants: {
    styles: {
      fill: {
        padding: "10px 15px",
        borderRadius: "10px",
        background: "#232329",
        transition: "all 0.25s",
        "&:focus": {
          background: "Black",
          border: "1px solid BlueViolet",
        },
      },
    },
  },
});
