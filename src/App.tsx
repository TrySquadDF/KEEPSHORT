import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";

import "./App.css";
import { styled } from "@stitches/react";
import { useDragonDrop } from "./hooks/useDragonDrop";
import Store from "./store/store";
import { observer } from "mobx-react-lite";

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

console.log(Store.ListCard());

function App() {
  const other = useDragonDrop();

  return (
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
        {CardList.map((el, i) => {
          return (
            <Card
              draggable={false}
              key={i}
              css={{
                background: el.background,
              }}
              {...other}
            >
              {el?.text}
            </Card>
          );
        })}
        <button
          onClick={() => {
            Store.creatCard({
              styles: {
                background: "red",
              },
            });
          }}
        >
          Create
        </button>
        <button
          onClick={() => {
            console.log(Store.ListCard());
          }}
        >
          Store
        </button>
      </div>
      {/* <Card
        css={{
          width: "300px",
          height: "100px",
          background: "rgba(255, 255, 255, 0.87)",
        }}
        ref={ref}
        onMouseDown={(e) => {
          console.log(e);
          if (ref.current) {
            ref.current.style.position = "absolute";
            ref.current.style.zIndex = "1000";
            setCount(true);
          }
        }}
        onMouseMove={count ? moveAt : undefined}
        onMouseUp={(e) => {
          setCount(false);
        }}
      ></Card> */}
    </div>
  );
}

export default observer(App);
