import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from './Button';
import { increment } from '../actions/counter';

export class Counter extends Component {
  super(props) {
    ///do more stuff here
    // thisstate = { count: 0 };
  }

  handleClick = (event) => {
    console.log(event);
    increment(1);
  }

  render() {
    return (
    <div>{this.props.count}
      <Button onClick={this.handleClick}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      count: state
    };
};

export default connect( mapStateToProps, { increment } )(Counter);
