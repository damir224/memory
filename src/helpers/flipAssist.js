export function flipAssistOne(cards, payload) {
  const newDeck = [
    ...cards.map(
      (e) => (
        e.id === payload
          ? { ...e, cardFace: !e.cardFace }
          : e),
    ),
  ]
  return newDeck;
}
export function flipAssistTwo(cards, payload) {
    const newDeck = [
      ...cards.map(
        (e) => (
          e.id === payload
            ? { ...e, cardFace: !e.cardFace }
            : e.complete
              ? e
              : { ...e, cardFace: false }
        ),
      ),
    ];
    return newDeck
}
export function flipAssistThree(cards, payload) {
  // if(cards.filter(el=>el.cardFace).length > 1){
  //   newDeck = [
  //     ...cards.map(
  //       (e) => (
  //         e.id === payload
  //           ? { ...e, cardFace: !e.cardFace }
  //           : e.complete
  //             ? e
  //             : { ...e, cardFace: false }
  //       ),
  //     ),
  //   ];
  //   return newDeck
  // }
  // newDeck = [
  //   ...cards.map(
  //     (e) => (
  //       e.id === payload
  //         ? { ...e, cardFace: !e.cardFace }
  //         : e),
  //   ),
  // ]
  return cards;
}
