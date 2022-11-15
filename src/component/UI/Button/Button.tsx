import { styled } from "../../stitches.config";

export const Button = styled("button", {
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: "500",
  fontFamily: "inherit",
  backgroundColor: "#1a1a1a",
  cursor: "pointer",
  transition: "border-color 0.25s",
  "&:hover": {
    borderColor: "#646cff",
  },
  "&:focus , &:focus-visible": {
    outline: "4px auto -webkit-focus-ring-color",
  },
});

// button:hover {
//     border-color: #646cff;
//   }
//   button:focus,
//   button:focus-visible {
//     outline: 4px auto -webkit-focus-ring-color;
//   }

// border-radius: 8px;
// border: 1px solid transparent;
// padding: 0.6em 1.2em;
// font-size: 1em;
// font-weight: 500;
// font-family: inherit;
// background-color: #1a1a1a;
// cursor: pointer;
// transition: border-color 0.25s;
