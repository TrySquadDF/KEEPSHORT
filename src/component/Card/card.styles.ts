import { css, keyframes } from "../stitches.config";

const CardStyles = css({
  backdropFilter: "grayscale(30%)",
  width: "340px",
  minHeight: "115px",
  borderRadius: "5px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const ContentStyles = css({
  width: "90%",
  height: "40px",
  textOverflow: "ellipsis",
  overflow: "clip",
  wordBreak: "break-word",
  padding: "10px 0",
  color: "white",
});

const ButtonBlockStyles = css({
  height: "32px",
  width: "90%",
  paddingBottom: "10px",
  display: "flex",
  justifyContent: "flex-end",
  ":not(:last-child)": {
    padding: "5px",
    center: true,
    marginRight: "0.5rem",
  },
  button: {
    "&.active": {
      svg: {
        fill: "black",
      },
    },
    svg: {
      fill: "white",
      scale: "0.8",
    },
  },
});

const ButtonStylesAnimateKeyFrames = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: "1",
  },
});

const ButtonStylesAnimate = css({
  animation: `${ButtonStylesAnimateKeyFrames} 0.6s linear 0s `,
});

export {
  CardStyles,
  HeaderStyles,
  FooterStyles,
  ContentStyles,
  ButtonBlockStyles,
  ButtonStylesAnimateKeyFrames,
  ButtonStylesAnimate,
};
