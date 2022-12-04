import { makeAutoObservable } from "mobx";
import { CardOptions } from "../types/logicsType";
import hslParser from "../utility/hslParser/hslParser";

class Store {
  private cards: Set<CardOptions> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  creatCard({
    mobile = false,
    ...card
  }: Omit<Omit<CardOptions, "key">, "mobile"> & { mobile?: boolean }) {
    console.log(mobile);

    const bg = card.styles
      ? card.styles.backgroundColor || card.styles.background
      : false;
    if (card.styles && bg) {
      const cooficient = hslParser(bg as string);

      card.styles = {
        ...card.styles,
        color: cooficient ? (cooficient > 50 ? "Black" : "White") : "White",
      };
    }

    this.cards.add({ ...card, key: Math.random().toString(), mobile: mobile });
  }

  deleteCard(card: CardOptions) {
    return this.cards.delete(card);
  }

  editCard(oldCard: CardOptions, newCard: CardOptions) {
    this.cards.delete(oldCard);
    return this.cards.add(newCard);
  }

  listCard() {
    return [...this.cards];
  }
}

export default new Store();
