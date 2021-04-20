import React from 'react';
import TableRow from './TableRow';
import './Table.css';

export default function index({ games }) {
  return (
    <div className='tableBox'>
      <table>
        <tbody>
          {games.map((e) => (
            <TableRow key={e.id} id={e.id} count={e.count} />
          ))}
        </tbody>
        <thead>
          <tr>
            <th>id</th>
            <th>count</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
