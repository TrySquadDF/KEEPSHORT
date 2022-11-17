import { FC, PropsWithChildren } from "react";
import Portal from "../Portal/Portal";

export const Popup: FC<
  { isOpen?: boolean; className?: string } & PropsWithChildren
> = ({ isOpen = false, className, children }) => {
  if (isOpen === false) return null;

  return <Portal children={children} classname={className} />;
};
