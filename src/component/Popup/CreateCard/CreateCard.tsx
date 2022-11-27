import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useMemo,
  useRef,
  useState,
} from "react";

import { useOnClickOutside } from "usehooks-ts";
import { HslStringColorPicker } from "react-colorful";

import { Popup } from "../Popup";
import { css, portal } from "../../stitches.config";
import { Box, Button, Input, Label, TextArea } from "../../UI";

import store from "../../../store/store";

const wrapperstyles = css({
  width: "400px",
  height: "450px",
  maxHeight: "450px",
  padding: "30px",
  display: "flex",
});

const mainblock = css({
  size: "100%",
  background: "#18181b",
  borderRadius: "10px 0 0 10px",
});

const colorBar = css({
  width: "40px",
  height: "100%",
  borderRadius: "0 10px 10px 0",
});

const size100 = css({
  size: "100%",
});

const CreateCardPopup: FC<{
  isOpen?: boolean;
  onCloseEvent: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen = false, onCloseEvent }) => {
  const input = useRef<HTMLInputElement>(null);
  const area = useRef<HTMLTextAreaElement>(null);
  const colorRampRef = useRef<HTMLDivElement>(null);

  const [colorRamp, setColorRamp] = useState<{
    state: boolean;
    position: { top: number; left: number };
  }>({
    state: false,
    position: {
      top: 0,
      left: 0,
    },
  });
  const [colorState, setColorState] = useState<string>("hsl(0, 100%, 100%)");

  const classPopupPos = useMemo(() => {
    return css({
      top: colorRamp.position.top,
      left: colorRamp.position.left,
    });
  }, [colorRamp.position]);

  useOnClickOutside(colorRampRef, () => {
    setColorRamp((state) => ({ ...state, state: false }));
  });

  const SumbitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.creatCard({
      content: area.current?.value,
      Text: input.current?.value,
      styles: {
        backgroundColor: colorState,
      },
    });
    onCloseEvent(false);
  };

  return (
    <Popup className={portal()} isOpen={isOpen}>
      <Box className={wrapperstyles()} data-testid="Popup_card_testid">
        <Box className={mainblock()}>
          <form style={{ padding: "1rem" }} onSubmit={SumbitForm}>
            <Input
              variants="them"
              lable="Заголовок"
              ref={input}
              data-testid="title_testid"
            />
            <Label css={{ marginTop: "0.5rem" }} children="Текст" />
            <TextArea
              ref={area}
              styles="fill"
              data-testid="textarea_testid"
              maxLength={240}
              css={{
                height: "200px",
                width: "80%",
              }}
            />
            <Button
              variants="fill"
              data-testid="create_button_testid"
              css={{
                width: "90%",
                marginTop: "2rem",
              }}
            >
              Создать
            </Button>
          </form>
        </Box>
        <Box
          className={colorBar()}
          style={{ backgroundColor: colorState }}
          data-testid="button_active_colorRamp_testid"
          onClick={(e) => {
            setColorRamp((state) => ({
              state: !state.state,
              position: {
                left: e.nativeEvent.pageX + 15,
                top: e.nativeEvent.pageY + 15,
              },
            }));
          }}
        />
      </Box>
      <Popup
        isOpen={colorRamp.state}
        children={
          <Box className={size100()}>
            <Box
              ref={colorRampRef}
              children={
                <HslStringColorPicker
                  color={colorState}
                  onChange={setColorState}
                  className={classPopupPos()}
                  style={{ position: "absolute" }}
                  data-testid="colorRamp_testid"
                />
              }
            />
          </Box>
        }
        className={size100()}
      />
    </Popup>
  );
};

export default CreateCardPopup;
