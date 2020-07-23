import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

interface ILayout {
  focus: () => void;
}

export interface ILayoutProps {
  componentRef?: (_componentRef: ILayout) => void;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<ILayoutStyleProps, ILayoutStyles>;
  children?: React.ReactNode;
}

export interface ILayoutStyleProps {
  theme: ITheme;
  className?: string;
  // disabled?: boolean;
  // checked?: boolean;
}

export interface ILayoutStyles {
  root?: IStyle;
  container: IStyle;
  sidebar: IStyle;
  content: IStyle;
}
