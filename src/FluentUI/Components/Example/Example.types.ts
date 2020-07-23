// Documentation: ComponentName.types.ts
// https://github.com/microsoft/fluentui/wiki/Component-Anatomy#componentnametypests

import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

interface IExample {
  focus: () => void;
}

export interface IExampleProps {
  componentRef?: (_componentRef: IExample) => void;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IExampleStyleProps, IExampleStyles>;
  children?: React.ReactNode;
}

export interface IExampleStyleProps {
  theme: ITheme;
  className?: string;
  // disabled?: boolean;
  // checked?: boolean;
}

export interface IExampleStyles {
  root: IStyle;
  header?: IStyle;
  footer?: IStyle;
}
