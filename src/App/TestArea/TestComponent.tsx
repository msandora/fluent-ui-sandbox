import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from '@fluentui/react-northstar';

interface ITestComponentProps {
  data?: string[];
  incrementCounter?: any;
  decrementCounter?: any;
}

const mapStateToProps = (state: { data: any }) => ({
  data: state.data,
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  // openModal,
};

class TestComponent extends Component<ITestComponentProps> {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    console.log(data);
    return (
      <div>
        <h1>TestComponent</h1>
        <div>The answer is: {data}</div>
      
        <Button
          //@ts-ignore
          onClick={(e) => incrementCounter(e.target.name)}
          size='medium'
          content='Increment'
          iconPosition='before'
          secondary
        />
        <Button
          //@ts-ignore
          onClick={(e) => decrementCounter(e.target.name)}
          size='medium'
          content='Decrement'
          iconPosition='before'
          secondary
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
