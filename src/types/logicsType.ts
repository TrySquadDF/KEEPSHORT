import { CSSProperties } from "@stitches/react";
import { ReactNode } from "react";

export type CardOptions = {
  styles?: CSSProperties;
  content?: ReactNode;
  key: string;
};
