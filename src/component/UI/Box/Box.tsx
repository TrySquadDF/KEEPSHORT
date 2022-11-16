import { styled } from "../../stitches.config";

export const Box = styled("div", {
  variants: {
    align: {
      center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});
