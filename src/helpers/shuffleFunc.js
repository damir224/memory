export default function shuffleFunc(arr) {
  const propFunc = [...arr];
  const { length } = propFunc;
  let currentElem;
  let index;
  for (let el = 0; el < length - 1; el += 1) {
    index = Math.floor(Math.random() * el);
    currentElem = propFunc[el];
    propFunc[el] = propFunc[index];
    propFunc[index] = currentElem;
  }
  return propFunc;
}
