import type * as Stitches from "@stitches/react";
import { FC, InputHTMLAttributes, MutableRefObject } from "react";
import { styled } from "../../stitches.config";
import { Box } from "../Box/Box";
import Label from "../Lable/Lable";

const InputStyles = styled("input", {
  outline: "none",
  border: "none",
  background: "none",

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

const Input: FC<
  InputHTMLAttributes<HTMLInputElement> &
    Stitches.VariantProps<typeof InputStyles> & {
      lable?: string;
      ref?:
        | ((instance: HTMLInputElement | null) => void)
        | React.RefObject<HTMLInputElement>
        | null
        | undefined;
    }
> = ({ lable, ...args }) => {
  return (
    <Box>
      {lable && <Label children={lable} />}
      <InputStyles {...args} />
    </Box>
  );
};

export default Input;
