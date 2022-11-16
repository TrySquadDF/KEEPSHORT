import { CSSProperties } from "react";

import "overlayscrollbars/overlayscrollbars.css";
import "./App.css";

import { styled } from "@stitches/react";
import { useDragonDrop } from "./hooks/useDragonDrop";
import Store from "./store/store";
import { observer } from "mobx-react-lite";
import store from "./store/store";
import { Button } from "./component/UI/Button/Button";
import { Overlay } from "./component/Overlay/Overlay";

const Card = styled("div", {
  width: "300px",
  height: "100px",
  "&:hover": {
    cursor: "move",
  },
});

const CardList: Array<{
  background: CSSProperties["background"];
  text?: string;
}> = [
  { background: "black" },
  { background: "azure" },
  { background: "rgb(138, 43, 226)" },
  { background: "green" },
];

function App() {
  const other = useDragonDrop();

  return (
    <Overlay>
      <div
        className="App"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {store.listCard().map((element, index) => {
            return (
              <Card
                css={{
                  background: "Aqua",
                }}
                key={element.key}
                {...other}
              />
            );
          })}
          <Button
            variants="them"
            onClick={() => {
              Store.creatCard({
                styles: {
                  background: "red",
                },
              });
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </Overlay>
  );
}

export default observer(App);
