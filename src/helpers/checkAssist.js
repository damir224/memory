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

export default checkAssist;
// export default function flipAssist(cards, payload) {
//   if (payload.prev === payload.next) {
//     const a = cards.map((e) => (
//       e.id === payload.prev.id || e.id === payload.next.id
//         ? e.complete = true
//         : e
//     ));
//   }
//   return cards.map((e) => (
//     e.id === payload.prev.id || e.id === payload.next.id
//       ? e.cardFace = false
//       : e
//   ));
// }
