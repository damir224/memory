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
    if (newArr[0].logo === newArr[1].logo) {
      return cards.map((e) => (
        e.id === newArr[0].id || e.id === newArr[1].id
          ? {...e, complete: true}
          : e))
    }
  }
  return newDeck;
}
export function flipAssistAll(cards) {
  return [
    ...cards.map(
      (e) => (
        e.complete === false
          ? { ...e, cardFace: false }
          : e
      ),
    ),
  ];
}
