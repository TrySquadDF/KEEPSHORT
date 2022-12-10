import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import "overlayscrollbars/overlayscrollbars.css";
import "./App.css";

import { useEffect, useRef } from "react";
import { useDragonDrop } from "./hooks/useDragonDrop";
import { observer } from "mobx-react-lite";

import { Box } from "./component/UI";
import { Overlay } from "./component/Overlay/Overlay";

import WebFont from "webfontloader";
import Store from "./store/store";
import Card from "./component/Card/Card";
import { ToolTip } from "./component/Tooltip/Tooltip";

function App() {
  const other = useDragonDrop();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,700"],
      },
    });
  }, []);

  return (
    <OverlayScrollbarsComponent>
      <Overlay>
        <Box
          data-testid="root_testid"
          css={{ center: true, width: "100vw", height: "100vh" }}
          onContextMenu={(ev) => {
            ev.preventDefault();
          }}
        >
          {Store.listCard().map((element) => {
            return <Card key={element.key} card={element} {...other} />;
          })}

          <img
            src="/vite.svg"
            style={{
              marginTop: "-4rem",
              userSelect: "none",
              opacity: 0.2,
              zIndex: -1,
            }}
            draggable={false}
          />
        </Box>
      </Overlay>
    </OverlayScrollbarsComponent>
  );
}

export default observer(App);
