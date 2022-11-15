import { makeAutoObservable } from "mobx";
import { CardOptions } from "../types/logicsType";

class Store {
  cards: Set<CardOptions> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  creatCard(card: Omit<CardOptions, "key">) {
    this.cards.add({ ...card, key: Math.random().toString() });
  }

  listCard() {
    return [...this.cards];
  }
}

export default new Store();
