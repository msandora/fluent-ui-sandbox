import { styled } from '@fluentui/react/lib/Utilities';

import { IHeaderProps, IHeaderStyleProps, IHeaderStyles } from './Header.types';

import HeaderBase from './HeaderBase.base';
import { styles } from './Header.styles';

/**
 * Header description. Could be a variant of any other component's base.
 */
export const Header = styled<IHeaderProps, IHeaderStyleProps, IHeaderStyles>(
  HeaderBase,
  styles
);
