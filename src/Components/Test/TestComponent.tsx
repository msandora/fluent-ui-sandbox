import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from '@fluentui/react-northstar';

interface ITestComponentProps {
  data?: string[];
}

const mapStateToProps = (state: { data: any; }) => ({
  data: state.data,
});

class TestComponent extends Component<
  ITestComponentProps
> {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Text content='TestComponent' />
        <div>The answer is: {data}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TestComponent);