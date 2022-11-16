import { FC, PropsWithChildren, useState } from "react";

import { Box } from "../UI/Box/Box";
import { Button } from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import BurgerMenu, { Add } from "../Icon/Icon";

import { css } from "../stitches.config";
import cn from "classnames";

import Portal from "../Portal/Portal";
import { HexColorPicker } from "react-colorful";
import { TextArea } from "../UI/TextArea/TextArea";

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

const portal = css({
  size: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.85)",
});

export const Overlay: FC<PropsWithChildren> = ({ children }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);

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
        <Box>
          {add && (
            <Portal classname={portal()}>
              <Box
                css={{
                  width: "400px",
                  height: "450px",
                  maxHeight: "450px",
                  padding: "30px",
                  display: "flex",
                }}
              >
                <Box
                  css={{
                    size: "100%",
                    background: "#18181b",
                    borderRadius: "10px 0 0 10px",
                  }}
                >
                  <form style={{ padding: "1rem" }}>
                    <Input variants="them" lable="Заголовок" />
                    <TextArea
                      styles="fill"
                      css={{
                        height: "200px",
                        width: "80%",
                      }}
                    />
                  </form>
                </Box>
                <Box
                  css={{
                    width: "40px",
                    height: "100%",
                    borderRadius: "0 10px 10px 0",
                    background: "Aqua",
                  }}
                ></Box>
              </Box>
            </Portal>
          )}
        </Box>
      </Box>
      {menuActive && (
        <Box className={planeStyle()}>
          <Button
            variants="plane"
            onClick={() => {
              setAdd((state) => !state);
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
};
