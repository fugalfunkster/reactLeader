import React from 'react';

const List = props => {
  const rankedList = props.data.map((user, index) => {
    return (
        <tr>
          <td>{index + 1}</td>
          <td>
            <a href={`www.freecodecamp.com/${user.username}`}>
              <img src={user.img} />
              <p>{user.username}</p>
            </a>
          </td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
    );
  });
  return (
    <table>
      <thead>
        <th>#</th>
        <th>Camper Name</th>
          <th onClick={props.lately}>Points in last 30 Days</th>
          <th onClick={props.all}>All Time Points</th>
        </thead>
        <tbody>
        {rankedList}
        </tbody>
      </table>
    );
  };

module.exports = List;
