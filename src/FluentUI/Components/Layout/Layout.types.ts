import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

interface Layout {
  focus: () => void;
}

export interface ILayoutProps {
  componentRef?: (_componentRef: Layout) => void;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<ILayoutStyleProps, ILayoutStyles>;

  children?: React.ReactNode;
}

export interface ILayoutStyleProps {
  theme: ITheme;
  className?: string;
}

export interface ILayoutStyles {
  root: IStyle;
  container: IStyle;
  sidebar: IStyle;
  content: IStyle;
}
