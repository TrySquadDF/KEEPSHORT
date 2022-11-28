import { fireEvent, render } from "@testing-library/react";
import store from "../../store/store";
import { CardOptions } from "../../types/logicsType";
import Card from "./Card";

describe("test card", () => {
  const propsCard: CardOptions = {
    Text: "TestTitle",
    content: "TestBody",
    key: "QWEQ2321QE",
    styles: {
      background: "White",
      color: "Black",
    },
  };

  const card = {
    Text: propsCard.Text,
    content: propsCard.content,
    styles: { background: "hsl(0, 100%, 100%)" },
  };

  it("if there is no me in this world, should there be a this world?", () => {
    const { getByText, getByTestId } = render(<Card card={propsCard} />);

    expect(getByText("TestTitle")).toBeInTheDocument();
    expect(getByText("TestBody")).toBeInTheDocument();
    expect(getByTestId("button_edit_testid")).toBeInTheDocument();
  });

  it("reality is easier to change if you put effort into it, and if it is, then it is even easier", async () => {
    store.creatCard(card);

    const { getByTestId, getByText } = render(
      <>
        {store.listCard().map((el) => (
          <Card card={el} key={el.key} />
        ))}
      </>
    );

    expect(getByTestId("card_testid")).toBeInTheDocument();

    fireEvent.click(getByTestId("button_edit_testid"));

    expect(getByTestId("button_delete_testid")).toBeInTheDocument();
    expect(getByTestId("button_todefualt_testid")).toBeInTheDocument();
    expect(getByTestId("input_change_title_testid")).toBeInTheDocument();
    expect(getByTestId("input_change_string_body_testid")).toBeInTheDocument();

    fireEvent.input(getByTestId("input_change_title_testid"), {
      target: {
        value: "testTitleChangeEvent",
      },
    });

    fireEvent.input(getByTestId("input_change_string_body_testid"), {
      target: {
        value: "testBodyChangeEvent",
      },
    });

    fireEvent.click(getByTestId("button_edit_testid"));

    expect(getByText("testTitleChangeEvent")).toBeInTheDocument();
    expect(getByText("testBodyChangeEvent")).toBeInTheDocument();

    store.deleteCard(store.listCard()[0]);
  });

  it("I can delete anything that needs to be deleted", async () => {
    store.creatCard(card);

    const { getByTestId, getAllByTestId } = render(
      <>
        {store.listCard().map((el) => (
          <Card card={el} key={el.key} />
        ))}
      </>
    );

    expect(getAllByTestId("card_testid").length).toBe(1);
    fireEvent.click(getByTestId("button_edit_testid"));
    fireEvent.click(getByTestId("button_delete_testid"));
    expect(getAllByTestId.length).toBe(0);
  });

  it("to return it to the way it was", async () => {
    store.creatCard(card);

    const { getByTestId } = render(
      <>
        {store.listCard().map((el) => (
          <Card card={el} key={el.key} />
        ))}
      </>
    );

    fireEvent.click(getByTestId("button_edit_testid"));

    const titleInput = getByTestId(
      "input_change_title_testid"
    ) as HTMLInputElement;
    const bodyInput = getByTestId(
      "input_change_string_body_testid"
    ) as HTMLInputElement;

    fireEvent.input(titleInput, {
      target: {
        value: "testTitleChangeEvent",
      },
    });

    fireEvent.input(bodyInput, {
      target: {
        value: "testBodyChangeEvent",
      },
    });

    expect(titleInput.value).toBe("testTitleChangeEvent");
    expect(bodyInput.value).toBe("testBodyChangeEvent");

    fireEvent.click(getByTestId("button_todefualt_testid"));

    expect(titleInput.value).toBe(card.Text);
    expect(bodyInput.value).toBe(card.content);
  });
});
