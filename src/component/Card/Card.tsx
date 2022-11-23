import { FC, useState } from "react";
import { CardOptions } from "../../types/logicsType";
import { SettingIcon, TrashcanIcon } from "../Icon/Icon";
import { css } from "../stitches.config";
import { Box, Button, Input } from "../UI";

import store from "../../store/store";

const CardStyles = css({
  backdropFilter: "grayscale(30%)",
  width: "340px",
  minHeight: "115px",
  borderRadius: "5px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    cursor: "move",
  },
});

const HeaderStyles = css({
  height: "40px",
  width: "100%",
  padding: "10px 0",
});

const FooterStyles = css({
  maxHeight: "calc(115px)",
  width: "100%",
  background: "#18181b",
  borderRadius: "3px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const ContentStyles = css({
  width: "90%",
  height: "40px",
  textOverflow: "ellipsis",
  overflow: "clip",
  wordBreak: "break-word",
  padding: "10px 0",
  color: "white",
});

const ButtonBlockStyles = css({
  height: "32px",
  width: "90%",
  paddingBottom: "10px",
  display: "flex",
  justifyContent: "flex-end",
});

const Card: FC<
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    content?: React.ReactNode;
    Card: CardOptions;
  }
> = ({ title, content, Card, ...args }) => {
  const [disc, setDisc] = useState(content);
  const [stateTitle, setStateTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);

  const handelEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setEditMode((state) => !state);
    if (editMode) {
      store.editCard(Card, { ...Card, Text: stateTitle, content: disc });
    }
  };

  return (
    <Box className={CardStyles()} {...args}>
      <Box className={HeaderStyles()}>
        <Box css={{ margin: "0 10px" }}>
          {!editMode ? (
            <span style={{ fontSize: "14pt" }}>{stateTitle && stateTitle}</span>
          ) : (
            <Input
              style={{
                color: "inherit",
              }}
              value={stateTitle}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                setStateTitle(e.target.value);
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
            <Button
              variants="fill"
              css={{
                padding: "5px",
                center: true,
                marginRight: "0.5rem",
              }}
              onClick={() => {
                store.deleteCard(Card);
              }}
            >
              <TrashcanIcon fill="white" />
            </Button>
          )}
          <Button
            variants={editMode ? "them" : "fill"}
            css={{ padding: "5px", center: true }}
            onClick={handelEdit}
          >
            <SettingIcon fill="white" style={{ scale: "0.8" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
