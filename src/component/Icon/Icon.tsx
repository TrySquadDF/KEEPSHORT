import { FC, HTMLAttributes, useState } from "react";
import { css, styled } from "../stitches.config";
import { Box } from "../UI/Box/Box";
import cn from "classnames";

const styleCSS = css({
  left: "0px",
  width: "100%",
  minHeight: "100%",
  top: "0px",
});

export const SettingIcon: FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...args
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      className={cn(styleCSS(), className)}
      {...args}
    >
      <g>
        <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
        <path
          fillRule="evenodd"
          d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export const BackArrowIcon: FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...args
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      className={cn(styleCSS(), className)}
      {...args}
    >
      <g>
        <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
      </g>
    </svg>
  );
};

export const TrashcanIcon: FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...args
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      className={cn(styleCSS(), className)}
      {...args}
    >
      <g>
        <path d="M12 2H8v1H3v2h14V3h-5V2zM4 7v9a2 2 0 002 2h8a2 2 0 002-2V7h-2v9H6V7H4z"></path>
        <path d="M11 7H9v7h2V7z"></path>
      </g>
    </svg>
  );
};

export const ScIcon: FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...args
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      className={cn(styleCSS(), className)}
      {...args}
    >
      <g>
        <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
      </g>
    </svg>
  );
};

export const IconApps: FC<
  React.SVGProps<SVGSVGElement> & { size?: number }
> = ({ size = 24, color = "currentColor", stroke = 2, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-apps"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x={4} y={4} width={6} height={6} rx={1} />
      <rect x={4} y={14} width={6} height={6} rx={1} />
      <rect x={14} y={14} width={6} height={6} rx={1} />
      <line x1={14} y1={7} x2={20} y2={7} />
      <line x1={17} y1={4} x2={17} y2={10} />
    </svg>
  );
};

export const IconX: FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  );
};
