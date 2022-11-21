import { makeAutoObservable } from "mobx";
import { CardOptions } from "../types/logicsType";
import hslParser from "../utility/hslParser/hslParser";

class Store {
  cards: Set<CardOptions> = new Set();

  constructor() {
    makeAutoObservable(this);
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

  listCard() {
    return [...this.cards];
  }
}

export default new Store();
