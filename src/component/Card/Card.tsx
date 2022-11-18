import { FC } from "react";
import { css, styled } from "../stitches.config";
import { Box } from "../UI";

const CardStyles = css({
  width: "340px",
  minHeight: "100px",
  borderRadius: "5px",
  position: "absolute",
  "&:hover": {
    cursor: "move",
  },
});

const HeaderStyles = css({
  height: "70px",
  width: "100%",
});

const BoxIs = () => {
  return <Box css={{ size: "100%", height: "100px" }}></Box>;
};

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...args }) => {
  console.log({ ...args });

  return (
    <Box className={CardStyles()} {...args}>
      <Box
        css={{
          zIndex: -1,
          width: "100%",
          minHeight: "100px",
        }}
      ></Box>
    </Box>
  );
};

export default Card;
