import { IStyle, ITheme } from '@fluentui/react';

export interface ILayoutProps {
    show?: boolean,
    theme?: any,
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