import React from 'react';

import styles from './list.css';

const List = props => {
  console.log(props.active);
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
          <td className={ props.active != "all" ? styles.active : ''} > {user.recent}</td>
          <td className={ props.active == "all" ? styles.active : ''} > {user.alltime}</td>
        </tr>
    );
  });
  return (
    <table>
      <thead>
        <th>#</th>
        <th>Camper Name</th>
          <th className={ props.active == "all" ? styles.inactive : styles.active } onClick={props.lately}>Points in last 30 Days</th>
          <th className={ props.active == "all" ? styles.active : styles.inactive } onClick={props.all}>All Time Points</th>
        </thead>
        <tbody>
        {rankedList}
        </tbody>
      </table>
    );
  };

module.exports = List;
