import styles from './app.css';
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  getInitialState() {
      return ({visibleData: [], recentData: [], allTimeData: []})
  },
  componentDidMount() {
    this.getAllTimeData();
  },
  getAllTimeData() {
    if (this.state.allTimeData.length === 0) {
      const that = this;
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(function (r) {
        console.log(r);
        that.setState({visibleData: r.data, allTimeData: r.data})
      })
      .catch(function (r) {
        console.log(r);
      })
    } else {
      const cache = this.state.allTimeData;
      this.setState({visibleData: cache})
    }
  },
  getLatelyData() {
    if (this.state.recentData.length === 0) {
      const that = this;
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function (r) {
        console.log(r);
        that.setState({visibleData: r.data, recentData: r.data})
      })
      .catch(function (r) {
        console.log(r);
      })
    } else {
      const cache = this.state.recentData;
      this.setState({visibleData: cache})
    }
  },
  render() {
    return (
      <div>          
        <List data={this.state.visibleData} lately={this.getLatelyData} all={this.getAllTimeData} />
      </div>
    )
  }
});

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
    )
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
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));

