// Documentation: ComponentName.base.tsx
// https://github.com/microsoft/fluentui/wiki/Component-Anatomy#componentnamebasetsx

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
        <div className={classNames.header}>Primary Color</div>
        <div className={classNames.root}>Secondary Color</div>
        <div className={classNames.footer}>Tertiary Color</div>
      </React.Fragment>
    );
  }
}
