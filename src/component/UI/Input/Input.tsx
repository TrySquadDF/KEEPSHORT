import React, { InputHTMLAttributes } from "react";
import type * as Stitches from "@stitches/react";

import { styled } from "../../stitches.config";

import { Box, Label } from "..";

const InputStyles = styled("input", {
  outline: "none",
  border: "none",
  background: "none",
  fontFamily: "Roboto",

  variants: {
    variants: {
      them: {
        border: "1px solid rgba(255,255,255 ,0.45)",
        padding: "10px 15px",
        borderRadius: "5px",
        fontWeight: "500",
        fontFamily: "inherit",
        transition: "border-color 0.25s",
        "&:focus": {
          borderColor: "BlueViolet",
          background: "Black",
        },
      },
      outside: {
        background: "#232329",
        padding: "10px 15px",
        borderRadius: "10px",
        minHeight: "50px",
      },
    },
  },
});

const Input = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> &
    Stitches.VariantProps<typeof InputStyles> & {
      lable?: string;
    }
>(({ lable, ...args }, ref) => {
  return (
    <Box>
      {lable && <Label children={lable} />}
      <InputStyles ref={ref} {...args} />
    </Box>
  );
});

export default Input;
