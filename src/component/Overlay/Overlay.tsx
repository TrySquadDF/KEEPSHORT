import { FC, PropsWithChildren, useState } from "react";
import BurgerMenu from "../Icon/Icon";
import { css } from "../stitches.config";
import { Box } from "../UI/Box/Box";

export const styles = css({
  width: "100px",
  height: "50px",
  background: "BlueViolet",
  display: "flex",
  position: "absolute",
  right: 0,
  top: 0,
  mx: "30px",
});

export const Overlay: FC<PropsWithChildren> = ({ children }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <Box>
      {children}
      <Box className={styles()}>
        <Box>
          <BurgerMenu
            active={menuActive}
            onClick={() => {
              setMenuActive((state) => !state);
            }}
          />
        </Box>
        <Box></Box>
      </Box>
      {menuActive && (
        <Box
          css={{
            width: "250px",
            height: "250px",
            background: "#323239",
            position: "absolute",
            top: 50,
            right: 30,
          }}
        ></Box>
      )}
    </Box>
  );
};
