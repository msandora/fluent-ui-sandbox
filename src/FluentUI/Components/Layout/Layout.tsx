import { styled } from '@fluentui/react/lib/Utilities';

import { ILayoutProps, ILayoutStyleProps, ILayoutStyles } from './Layout.types';

import LayoutBase from './LayoutBase.base';
import { styles } from './Layout.styles';

/**
 * Layout description. Could be a variant of any other component's base.
 */
export const Layout = styled<ILayoutProps, ILayoutStyleProps, ILayoutStyles>(
  LayoutBase,
  styles
);
