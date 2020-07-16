import { IStyle, ITheme } from '@fluentui/react';
import { IUserDto } from './UserApi';

export interface IUserModalProps {
    user: IUserDto,
    onSubmit(user: IUserDto): void,
    show: boolean,
    onClose(): void
}

export interface IComponentUserModalStyleProps {
    theme: ITheme;
    className?: string;
}

export interface IComponentUserModalStyles {
    root: IStyle;
    header: IStyle;
    footer: IStyle;
    content: IStyle;
    actions: IStyle;
}