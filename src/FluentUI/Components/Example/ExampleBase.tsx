import React, { Component } from 'react';
//@ts-ignore
import { classNamesFunction } from '../../Utilities';
import { IExampleProps } from './Example.types';
import { IExampleStyleProps, IExampleStyles } from './Example.types';

const getClassNames = classNamesFunction<IExampleStyleProps, IExampleStyles>();

 
class ExampleBase extends Component<IExampleProps, IExampleStyleProps, IExampleStyles> {
  public render() {
    const {
      //className,
      styles,
      theme,
    } = this.props;
    const classNames = getClassNames(styles, {
      theme: theme!,
      //className,
      // Other props from IExampleStyleProps
    });

    return (
      <div className={ classNames.root }>Hello</div>
    );
  }
}

export default ExampleBase;