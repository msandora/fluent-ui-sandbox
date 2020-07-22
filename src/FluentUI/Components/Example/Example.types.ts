import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

interface IExample {
  focus: () => void;
}

export interface IExampleProps {
  componentRef?: (_componentRef: IExample) => void;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IExampleStyleProps, IExampleStyles>;

  children?: React.ReactNode;
  show?: boolean;
  root?: IStyle;
  header?: IStyle;
  footer?: IStyle;
}

export interface IExampleStyleProps {
  theme: ITheme;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  root?: IStyle;
  header?: IStyle;
  footer?: IStyle;
}

export interface IExampleStyles {
  root: IStyle;
  myClass?: IStyle;
  header?: IStyle;
  footer?: IStyle;
}
