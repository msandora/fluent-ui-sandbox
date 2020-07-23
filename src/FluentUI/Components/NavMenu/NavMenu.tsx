import { styled } from '@fluentui/react/lib/Utilities';

import {
  INavMenuProps,
  INavMenuStyleProps,
  INavMenuStyles,
} from './NavMenu.types';

import { NavMenuBase } from './NavMenuBase.base';
import { styles } from './NavMenu.styles';

/**
 * NavMenu description. Could be a variant of any other component's base.
 */
export const NavMenu = styled<
  INavMenuProps,
  INavMenuStyleProps,
  INavMenuStyles
>(NavMenuBase, styles);
