// To prevent the need to rerender, we add the new card to the DOM directly
import { Card, cards } from "../Card/card.js";

export function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");
  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });
  return cardList;
}
