import * as React from 'react';
import { ITheme, IStyle, IStyleFunctionOrObject } from '@fluentui/react';
// import { ExampleBase } from './ExampleBase';

export interface ExampleProps {
  focus: () => void;
  flag: boolean;
  styles?: IStyleFunctionOrObject<IExampleStyleProps, IExampleStyles>;
  theme?: ITheme;
}

/* 
Have not been able to get this working, 
moved theme/styles above 
*/

// export IExampleProps extends React.Props<ExampleBase> {
//   componentRef?: (_componentRef: IExample) => void,
//   theme?: ITheme,
//   styles?: IStyleFunctionOrObject<IExampleStyleProps, IExampleStyles>,
// }

export interface IExampleStyleProps {
  theme: ITheme;
  className?: string;
  disabled: boolean;
  checked: boolean;
}

export interface IExampleStyles {
  root: IStyle;
  header: IStyle;
  footer: IStyle;
  // etc.
}
