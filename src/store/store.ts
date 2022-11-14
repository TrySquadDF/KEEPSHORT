import { CardOptions } from "../types/logicsType";

class Store {
  cards: Set<CardOptions> = new Set();

  creatCard(card: CardOptions) {
    this.cards.add(card);
  }

  ListCard() {
    return [...this.cards];
  }
}

export default new Store();
