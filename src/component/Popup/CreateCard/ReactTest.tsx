import { useState } from "react";
import CreateCardPopup from "./CreateCard";

export default ({ open = false }: { open?: boolean }) => {
  const state = useState(open);

  return <CreateCardPopup isOpen={state[0]} onCloseEvent={state[1]} />;
};
