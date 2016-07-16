import React from 'react';

const List = props => {
  const rankedList = props.data.map((user, index) => {
    return (
        <tr>
          <th>{index + 1}</th>
          <th>
            <a href={`www.freecodecamp.com/${user.username}`}>
              <img src={user.img} style={{height: 25}}/>
              {user.username}
            </a>
          </th>
          <th>{user.recent}</th>
          <th>{user.alltime}</th>
        </tr>
    );
  });
  return (
    <table>
      <tr>
        <th>#</th>
        <th>Camper Name</th>
          <th onClick={props.lately}>Points in last 30 Days</th>
          <th onClick={props.all}>All Time Points</th>
        </tr>
        {rankedList}
      </table>
    );
  };

module.exports = List;
