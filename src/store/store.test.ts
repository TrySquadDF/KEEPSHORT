import store from "./store";

describe("store test", () => {
  const testCard = {
    Text: "TestTitle",
    content: "TestContent",
    styles: { background: "Black" },
  };

  it("test method/list", () => {
    expect(Array.isArray(store.listCard())).toBeTruthy();
  });

  it("test method/create card", () => {
    store.creatCard(testCard);

    const list = store.listCard();

    expect(list.length).toBe(1);
    expect(list[0].key).toBeTruthy();
    expect(list[0].styles?.color === "White").toBeTruthy();
  });

  it("test method/delete card", () => {
    store.deleteCard(store.listCard()[0]);
    expect(store.listCard().length).toBe(0);
  });
});
