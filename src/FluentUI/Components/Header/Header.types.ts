import { IStyle, ITheme } from '@fluentui/react';

export interface IHeaderProps {
    show?: boolean,
    theme?: any,
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
    sidebar?: IStyle;
    content?: IStyle;
}