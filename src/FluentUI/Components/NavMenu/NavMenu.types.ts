import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

interface INavMenu {
  focus: () => void;
}

export interface INavMenuProps {
  componentRef?: (_componentRef: INavMenu) => void;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<INavMenuStyleProps, INavMenuStyles>;
  children?: React.ReactNode;
}

export interface INavMenuStyleProps {
  theme: ITheme;
  className?: string;
  // disabled?: boolean;
  // checked?: boolean;
}

export interface INavMenuStyles {
  root: IStyle;
  sidebar?: IStyle;
  nav_button?: IStyle;
}
