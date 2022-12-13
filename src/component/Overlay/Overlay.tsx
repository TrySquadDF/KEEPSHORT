import { FC, memo, PropsWithChildren, useState } from "react";

import { Box } from "../UI/Box/Box";
import { Button } from "../UI/Button/Button";

import { IconApps } from "../Icon/Icon";

import { css } from "../stitches.config";

import CreateCardPopup from "../Popup/CreateCard/CreateCard";
import { useEventListener } from "usehooks-ts";
import { BackDrop } from "../BackDrop/BackDrop";
import { ToolTip } from "../Tooltip/Tooltip";

const styles = css({
  width: "55px",
  minHeight: "64px",
  background: "rgba(56, 56, 56, 1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  borderRadius: "15px",
  left: 0,
  top: "calc(50% - 64px)",
  mx: "10px",
});

export const Overlay: FC<PropsWithChildren> = memo(({ children }) => {
  const backDropControll = useState<boolean>(false);
  const [backDropCoords, setCoords] = useState<
    undefined | { x: number; y: number }
  >(undefined);
  const [add, setAdd] = useState<boolean>(false);

  useEventListener("contextmenu", (ev) => {
    if (backDropControll[0] === false) {
      setCoords({ x: ev.pageX, y: ev.pageY });
      backDropControll[1]((state) => !state);
    }
  });

  return (
    <Box data-testid="overlay_testid">
      {children}
      <Box className={styles()}>
        <Button
          variants="hover"
          size="primary"
          onClick={() => {
            setAdd(true);
          }}
          children={<IconApps />}
          id="ToolTip"
          data-testid="button_open-create-popup_testid"
        />
      </Box>
      <BackDrop
        size={100}
        height={12}
        backDropControll={backDropControll}
        items={[
          {
            content: "создать",
            ReadOnly: false,
            props: {
              onClick: () => {
                backDropControll[1](false);
                setAdd(true);
              },
            },
          },
        ]}
        position={backDropCoords}
        offset={5}
      />
      <ToolTip offset={15} title="создать" id="ToolTip" />
      <CreateCardPopup isOpen={add} onCloseEvent={setAdd} />
    </Box>
  );
});
