import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import "./App.css";

import { useEffect } from "react";
import { useDragonDrop } from "./hooks/useDragonDrop";
import { observer } from "mobx-react-lite";

import { Box } from "./component/UI";
import { Overlay } from "./component/Overlay/Overlay";

import WebFont from "webfontloader";
import Store from "./store/store";
import Card from "./component/Card/Card";

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
    <OverlayScrollbarsComponent
      options={{ scrollbars: { theme: "os-theme-dark" } }}
      defer
    >
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
        </Box>
      </Overlay>
    </OverlayScrollbarsComponent>
  );
}

export default observer(App);
