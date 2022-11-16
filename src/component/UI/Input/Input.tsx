import type * as Stitches from "@stitches/react";
import { FC, InputHTMLAttributes } from "react";
import { styled } from "../../stitches.config";
import { Box } from "../Box/Box";

const InputStyles = styled("input", {
  outline: "none",
  border: "none",
  background: "none",

  variants: {
    variants: {
      them: {
        border: "1px solid rgba(255,255,255 ,0.45)",
        padding: "10px 15px",
        borderRadius: "10px",
        fontWeight: "500",
        fontFamily: "inherit",
        transition: "border-color 0.25s",
        "&:focus": {
          borderColor: "BlueViolet",
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

const Label = styled("label", {
  display: "flex",
  fontSize: "10pt",
  marginLeft: "5px",
  fontWeight: "bold",
});

const Input: FC<
  InputHTMLAttributes<HTMLInputElement> &
    Stitches.VariantProps<typeof InputStyles> & { lable?: string }
> = ({ lable, ...args }) => {
  return (
    <Box>
      {lable && <Label children={lable} />}
      <InputStyles {...args} />
    </Box>
  );
};

export default Input;
