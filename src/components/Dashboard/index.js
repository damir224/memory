import React from 'react';
import TableRow from './TableRow';
import './Table.css';

export default function index({ games }) {
  console.log(games);
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
{
  /* <table class='table table-striped'>
  <tbody>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-success'>
          Progress
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-warning'>
          Open
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-danger'>
          On hold
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-success'>
          Progress
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-danger'>
          On hold
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-warning'>
          Open
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-warning'>
          Open
        </a>
      </td>
    </tr>
    <tr>
      <th scope='row'>1001</th>
      <td>Mark Otto</td>
      <td>Japan</td>
      <td>$3000</td>
      <td>$1200</td>
      <td>
        <a href='#' class='btn btn-success'>
          Progress
        </a>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>Invoce</th>
      <th>Customer</th>
      <th>Ship</th>
      <th>Price</th>
      <th>Pruchased Price</th>
      <th>Status</th>
    </tr>
  </thead>
</table>; */
}
