import { FC } from "react";
import { css } from "../stitches.config";
import { Box } from "../UI";

const CardStyles = css({
  backdropFilter: "grayscale(30%)",
  width: "340px",
  minHeight: "115px",
  borderRadius: "5px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    cursor: "move",
  },
});

const HeaderStyles = css({
  height: "40px",
  width: "100%",
  padding: "10px 0",
});

const FooterStyles = css({
  height: "calc(115px - 40px)",
  width: "100%",
  background: "#18181b",
  borderRadius: "3px",
});

const Card: FC<
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    content?: React.ReactNode;
  }
> = ({ title, content, ...args }) => {
  return (
    <Box className={CardStyles()} {...args}>
      <Box className={HeaderStyles()}>
        <span style={{ color: "white", fontSize: "14pt", margin: "0 5px" }}>
          {title && title}
        </span>
      </Box>
      <Box className={FooterStyles()}>
        <Box css={{ size: "100%", padding: "20px" }}>{content && content}</Box>
      </Box>
    </Box>
  );
};

export default Card;
