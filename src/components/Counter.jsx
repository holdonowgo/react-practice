import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from './Button';
import increment from '../actions/counter';

export class Counter extends Component {
  // super(props) {
  //   ///do more stuff here
  //   // thisstate = { count: 0 };
  // }

  handleClick = (event) => {
    console.log(event);
    this.props.increment(1);
  }

  render() {
    console.log('Counter props:', this.props);
    return (
    <div>{this.props.count}
      <Button handleClick={this.handleClick}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      count: state.counterReducer
    };
};

function mapDispatchToProps(){
  return {increment};
}

export default connect( mapStateToProps, mapDispatchToProps )(Counter);
