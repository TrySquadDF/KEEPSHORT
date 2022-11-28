import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import "overlayscrollbars/overlayscrollbars.css";
import "./App.css";

import { useDragonDrop } from "./hooks/useDragonDrop";
import { observer } from "mobx-react-lite";
import { Box } from "./component/UI";
import { Overlay } from "./component/Overlay/Overlay";

import Store from "./store/store";
import Card from "./component/Card/Card";

function App() {
  const other = useDragonDrop();

  return (
    <OverlayScrollbarsComponent>
      <Overlay>
        <Box
          data-testid="root_testid"
          css={{ center: true, width: "100vw", height: "100vh" }}
        >
          <div
            style={{
              overflow: "hidden",
            }}
          >
            {Store.listCard().map((element) => {
              return <Card key={element.key} card={element} {...other} />;
            })}
          </div>
        </Box>
      </Overlay>
    </OverlayScrollbarsComponent>
  );
}

export default observer(App);
