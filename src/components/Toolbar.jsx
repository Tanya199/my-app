import React, { Component } from 'react';

import './styles/Toolbar.css';

class Toolbar extends Component {
  constructor(props){
    super(props);
    this.sorted = {
      count_pub: true,
      name: true,
    }
  }

  sort(type) {
    const { update, data } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;

    const sorted = [].slice.call(data).sort((a, b) => {
      if(a[type] === b[type]){ 
        return 0; 
      }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.sorted[type] = !isSorted;

    update({
      data: sorted,
    })
  }

  reset = () => {
    this.props.update({
      data: this.props.initialData,
      term: '',
    })
  }

  render() {
    return (
      <div className="Toolbar">
        <button className="Btn Btn-search" onClick={() => this.sort('count_pub')}>Search by posts</button>
        <button className="Btn Btn-search" onClick={() => this.sort('name')}>Search by name</button>
        <button className="Btn Btn-reset" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Toolbar;

