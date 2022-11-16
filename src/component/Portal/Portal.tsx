import ReactDOM from "react-dom";

import cn from "classnames";

import { ReactNode, useEffect, useState } from "react";
import { css } from "../stitches.config";

const styleProtal = css({
  position: "absolute",
});

const Portal = ({
  children,
  classname,
}: {
  children?: ReactNode;
  classname?: string;
}) => {
  const [container] = useState(() => {
    const result = document.createElement("div");
    result.className = cn(classname, styleProtal());

    return result;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
