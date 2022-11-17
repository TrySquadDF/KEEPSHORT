import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const { styled, keyframes, css } = createStitches({
  media: {
    longDesktop: "(min-width: 1345px) and (max-width: 1440px)",
    desktop: "(min-width: 1024px)",
    tablet: "(min-width: 720px) and (max-width: 1024px)",
    mobile: "(max-width: 720px)",
  },
  utils: {
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: Stitches.PropertyValue<"padding">) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
