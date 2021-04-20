import React from 'react';

export default function TableRow({ id, count }) {
  const secondCounter = count % 60;
  const minuteCounter = Math.floor(count / 60);
  const computedSecond =
    String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  const computedMinute =
    String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>
        {computedMinute}:{computedSecond}
      </td>
    </tr>
  );
}
