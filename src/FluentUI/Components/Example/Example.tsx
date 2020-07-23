import { styled } from '@fluentui/react/lib/Utilities';

import {
  IExampleProps,
  IExampleStyleProps,
  IExampleStyles,
} from './Example.types';

import { ExampleBase } from './ExampleBase.base';
import { styles } from './Example.styles';

/**
 * Example description. Could be a variant of any other component's base.
 */
export const Example = styled<
  IExampleProps,
  IExampleStyleProps,
  IExampleStyles
>(ExampleBase, styles);
