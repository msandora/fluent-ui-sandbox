import * as React from 'react';

import { classNamesFunction } from '@fluentui/react/lib/Utilities';

import {
  IExampleStyleProps,
  IExampleStyles,
  IExampleProps,
} from './Example.types';

const getClassNames = classNamesFunction<IExampleStyleProps, IExampleStyles>();

/**
 * Example with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
export class ExampleBase extends React.Component<
  IExampleProps,
  IExampleStyleProps
> {
  public render() {
    const { styles, theme, root, header, footer } = this.props;
    const classNames = getClassNames(styles, {
      theme: theme!,
      root,
      header,
      footer,
      // Other props from IExampleStyleProps go here
    });

    return (
      <React.Fragment>
        <div className={classNames.header}>header</div>
        <div className={classNames.root}>Root</div>
        <div className={classNames.footer}>footer</div>
      </React.Fragment>
    );
  }
}
