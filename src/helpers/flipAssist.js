export function flipAssistOne(cards, payload) {
  const newDeck = [
    ...cards.map(
      (e) => (
        e.id === payload
          ? { ...e, cardFace: true }
          : e),
    ),
  ]
  const newArr = newDeck.filter(e=>e.cardFace && !e.complete)
  if(newArr.length===2){
    console.log('newArr', newArr);
    if (newArr[0].logo === newArr[1].logo) {
      return cards.map((e) => (
        e.id === newArr[0].id || e.id === newArr[1].id
          ? {...e, complete: true}
          : e))
    }
  }
  return newDeck;
}
const checkAssist = (cards, payload) => {
  if (payload?.prev && payload?.next) {
    if (payload.prev.logo === payload.next.logo && payload.prev.id !== payload.next.id) {
      return cards.map((e) => (
        e.id === payload.prev.id || e.id === payload.next.id
          ? {...e, complete: true}
          : e))
    }

    return cards.map((e) => (
      e.id === payload.prev.id || e.id === payload.next.id ||  e.complete === false
        ? {...e, cardFace: false}
        : e));
  }
  return payload;
};

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
export function flipAssistAll(cards) {
  const newDeck = [
    ...cards.map(
      (e) => (
        e.complete === false
          ? { ...e, cardFace: false }
          : e
      ),
    ),
  ];
  return newDeck
}
