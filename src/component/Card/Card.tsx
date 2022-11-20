import { FC } from "react";
import { EditMarker } from "../Icon/Icon";
import { css } from "../stitches.config";
import { Box, Button } from "../UI";

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
  maxHeight: "calc(115px)",
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
        <span style={{ color: "white", fontSize: "14pt", margin: "0 10px" }}>
          {title && title}
        </span>
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className={FooterStyles()}
      >
        <Box
          css={{
            width: "90%",
            height: "40px",
            textOverflow: "ellipsis",
            overflow: "clip",
            wordBreak: "break-word",
            padding: "10px 0",
          }}
        >
          {content && content}
        </Box>
        <Box
          css={{
            height: "32px",
            width: "90%",
            paddingBottom: "10px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variants="fill" css={{ padding: "5px", center: true }}>
            <EditMarker css={{ scale: "0.9" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
