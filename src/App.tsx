import "overlayscrollbars/overlayscrollbars.css";
import "./App.css";

import { useDragonDrop } from "./hooks/useDragonDrop";
import { observer } from "mobx-react-lite";
import { Overlay } from "./component/Overlay/Overlay";
import { toJS } from "mobx";

import Store from "./store/store";
import Card from "./component/Card/Card";

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
          {Store.listCard().map((element, index) => {
            return (
              <Card
                title={element.Text}
                content={element.content}
                style={toJS(element.styles)}
                key={element.key}
                {...other}
              />
            );
          })}
        </div>
      </div>
    </Overlay>
  );
}

export default observer(App);
