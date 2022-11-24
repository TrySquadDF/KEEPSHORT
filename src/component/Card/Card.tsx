import { FC, useState } from "react";
import { CardOptions } from "../../types/logicsType";

import { BackArrowIcon, SettingIcon, TrashcanIcon } from "../Icon/Icon";
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

const Card: FC<
  React.HTMLAttributes<HTMLDivElement> & {
    card: CardOptions;
  }
> = ({ card, id, ...args }) => {
  const [disc, setDisc] = useState(card.content);
  const [title, setTitle] = useState(card.Text);
  const [editMode, setEditMode] = useState(false);

  const handelEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setEditMode((state) => !state);
    if (editMode) {
      store.editCard(card, { ...card, Text: title, content: disc });
    }
  };

  return (
    <Box className={CardStyles()} css={{ ...card.styles }} id={id}>
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
      <Box className={HeaderStyles()}>
        <Box css={{ margin: "0 10px" }}>
          {!editMode ? (
            <span style={{ fontSize: "14pt" }}>{title && title}</span>
          ) : (
            <Input
              style={{
                color: "inherit",
              }}
              value={title}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
        </Box>
      </Box>
      <Box className={FooterStyles()}>
        <Box className={ContentStyles()}>
          {editMode ? (
            typeof disc === "string" ? (
              <Input
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
                className={ButtonStylesAnimate()}
                variants="fill"
                onClick={() => {
                  store.deleteCard(card);
                }}
              >
                <TrashcanIcon />
              </Button>
              <Button
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
