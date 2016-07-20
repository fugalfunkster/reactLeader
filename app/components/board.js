import React from 'react';
import axios from 'axios';
import List from './list.js';

const Board = React.createClass({
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
      <div className='board'>  
        <List data={this.state.visibleData} lately={this.getLatelyData} all={this.getAllTimeData} />
      </div>
    )
  }
});

module.exports = Board;
