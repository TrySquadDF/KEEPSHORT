import { makeAutoObservable } from "mobx";
import { CardOptions } from "../types/logicsType";
import hslParser from "../utility/hslParser/hslParser";

class Store {
  cards: Set<CardOptions> = new Set();
  editPopup: boolean = false;
  cardEdit: CardOptions | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  openOrCloseEditPopup() {
    this.editPopup = !this.editPopup;
  }

  setCardEdit(key: string) {
    this.editPopup = !this.editPopup;
    this.cardEdit = [...this.cards].find((el) =>
      el.key === key ? true : false
    );
    console.log(this.cardEdit);
  }

  creatCard(card: Omit<CardOptions, "key">) {
    const bg = card.styles ? card.styles.backgroundColor : false;
    if (card.styles && bg) {
      const cooficient = hslParser(bg as string);

      card.styles = {
        ...card.styles,
        color: cooficient ? (cooficient > 50 ? "Black" : "White") : "White",
      };
    }
    this.cards.add({ ...card, key: Math.random().toString() });
  }

  editCard(card: CardOptions) {
    return [...this.cards, { ...card }];
  }

  listCard() {
    return [...this.cards];
  }
}

export default new Store();
