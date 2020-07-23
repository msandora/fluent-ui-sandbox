import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

interface IHeader {
  focus: () => void;
}

export interface IHeaderProps {
  componentRef?: (_componentRef: IHeader) => void;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IHeaderStyleProps, IHeaderStyles>;
  children?: React.ReactNode;
  onToggleNavButton(): void;
  onClickTheme?(): void;
}

export interface IHeaderStyleProps {
  theme: ITheme;
  className?: string;
}

export interface IHeaderStyles {
  root: IStyle;
  container?: IStyle;
}
