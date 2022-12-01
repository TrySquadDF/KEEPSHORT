import { FC, memo, PropsWithChildren, useState } from "react";

import { Box } from "../UI/Box/Box";
import { Button } from "../UI/Button/Button";

import BurgerMenu, { Add } from "../Icon/Icon";

import { css } from "../stitches.config";

import CreateCardPopup from "../Popup/CreateCard/CreateCard";

const styles = css({
  width: "100px",
  height: "50px",
  background: "BlueViolet",
  display: "flex",
  position: "absolute",
  right: 0,
  top: 0,
  mx: "30px",
});

const planeStyle = css({
  width: "250px",
  height: "250px",
  background: "#323239",
  position: "absolute",
  top: 50,
  right: 30,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
});

export const Overlay: FC<PropsWithChildren> = memo(({ children }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);

  const changeStateMenu = () => {
    setMenuActive((state) => !state);
  };

  return (
    <Box data-testid="overlay_testid">
      {children}
      <Box className={styles()}>
        <Box>
          <BurgerMenu
            data-testid="button_open_menu"
            active={menuActive}
            onClick={changeStateMenu}
          />
        </Box>
        <Box>
          <CreateCardPopup isOpen={add} onCloseEvent={setAdd} />
        </Box>
      </Box>
      {menuActive && (
        <Box className={planeStyle()} data-testid="menu_testid">
          <Button
            data-testid="button_plane_add_testid"
            variants="plane"
            onClick={() => {
              setAdd((state) => !state);
              setMenuActive(false);
            }}
          >
            <Box align="center">
              <Add />
            </Box>
          </Button>
        </Box>
      )}
    </Box>
  );
});
