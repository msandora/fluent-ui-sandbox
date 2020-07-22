import * as React from 'react';
// Fluent imports
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import { getTheme } from '@fluentui/react';
// Anatomy imports
import { styles } from './Example.styles';
import {
  IExampleStyleProps,
  IExampleStyles,
  IExampleProps,
} from './Example.types';

const getClassNames = classNamesFunction<IExampleStyleProps, IExampleStyles>();
const theme = getTheme();

export class ExampleBase extends React.Component<IExampleProps> {
  render() {
    const classNames = getClassNames(styles, { theme });
    return (
      <React.Fragment>
        <h1>Example component</h1>
        <h3>Demonstrate styling with FLuent UI</h3>
        <div className={classNames.header}>This is BLUE</div>
        <div className={classNames.root}>This is Red</div>
        <div className={classNames.footer}>This is Green</div>
      </React.Fragment>
    );
  }
}
