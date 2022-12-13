import { FC, useState, useRef, useMemo } from "react";
import { CardOptions } from "../../types/logicsType";

import { BackArrowIcon, ScIcon, SettingIcon, TrashcanIcon } from "../Icon/Icon";
import { Box, Button, Input } from "../UI";
import {
  ButtonBlockStyles,
  ButtonStylesAnimate,
  CardStyles,
  ContentStyles,
  FooterStyles,
  HeaderStyles,
} from "./card.styles";

import store from "../../store/store";
import { css } from "../stitches.config";
import { BackDrop } from "../BackDrop/BackDrop";

const Card: FC<
  React.HTMLAttributes<HTMLDivElement> & {
    card: CardOptions;
  }
> = ({ card, id, ...args }) => {
  const [disc, setDisc] = useState(card.content);
  const [title, setTitle] = useState(card.Text);
  const [editMode, setEditMode] = useState(false);

  const refTriggerBackdrop = useRef<HTMLButtonElement>(null);
  const backDropControll = useState(false);

  const handelEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setEditMode((state) => !state);
    if (editMode) {
      store.editCard(card, { ...card, Text: title, content: disc });
    }
  };

  const adaptvieButton = css({
    marginRight: "15px",
    zIndex: "2",
    svg: {
      fill: card.styles?.color,
    },
  });

  return (
    <Box
      data-testid="card_testid"
      className={CardStyles()}
      css={{ ...card.styles }}
      id={id}
    >
      {editMode === false && (
        <Box
          css={{
            position: "absolute",
            width: "100%",
            height: "100%",
            "&:hover": {
              cursor: "move",
            },
          }}
          {...args}
        />
      )}
      <BackDrop
        refTrigger={refTriggerBackdrop}
        backDropControll={backDropControll}
        items={[
          {
            content: `Coздaнa c ${
              card.mobile ? "мобильного устройства" : "PC"
            }`,
            ReadOnly: true,
          },
        ]}
      />
      <Box className={HeaderStyles()}>
        <Box css={{ margin: "0 10px", display: "flex" }}>
          {!editMode ? (
            <span style={{ fontSize: "14pt" }}>{title && title}</span>
          ) : (
            <Input
              data-testid="input_change_title_testid"
              style={{
                color: "inherit",
              }}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
        </Box>
        <Button
          data-testid="button_specifications_testid"
          variants="hover"
          size="primary"
          className={adaptvieButton()}
          ref={refTriggerBackdrop}
          onClick={() => {
            backDropControll[1]((state) => !state);
          }}
        >
          <ScIcon />
        </Button>
      </Box>
      <Box className={FooterStyles()}>
        <Box className={ContentStyles()}>
          {editMode ? (
            typeof disc === "string" ? (
              <Input
                data-testid="input_change_string_body_testid"
                value={disc}
                onChange={(e) => {
                  setDisc(e.target.value);
                }}
              />
            ) : (
              disc
            )
          ) : (
            disc
          )}
        </Box>
        <Box className={ButtonBlockStyles()}>
          {editMode && (
            <>
              <Button
                data-testid="button_delete_testid"
                className={ButtonStylesAnimate()}
                variants="fill"
                onClick={() => {
                  store.deleteCard(card);
                }}
              >
                <TrashcanIcon />
              </Button>
              <Button
                data-testid="button_todefualt_testid"
                variants="fill"
                className={ButtonStylesAnimate()}
                onClick={() => {
                  setTitle(card.Text);
                  setDisc(card.content);
                }}
              >
                <BackArrowIcon />
              </Button>
            </>
          )}
          <Button
            data-testid="button_edit_testid"
            className={editMode ? "active" : undefined}
            variants={editMode ? "success" : "fill"}
            css={{ padding: "5px", center: true }}
            onClick={handelEdit}
          >
            <SettingIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
