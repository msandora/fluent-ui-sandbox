import { IStyle, ITheme } from '@fluentui/react';

export interface INavMenuProps {
    show?: boolean,
    theme?: any,
    children?: React.ReactNode;
}

export interface INavMenuStyleProps {
    theme: ITheme;
    className?: string;
}

export interface INavMenuStyles {
    root: IStyle;
    container?: IStyle;
    sidebar?: IStyle;
    content?: IStyle;
}