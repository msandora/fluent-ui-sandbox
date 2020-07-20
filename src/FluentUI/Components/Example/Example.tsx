//@ts-ignore
import { styled } from '../../Utilities';
import {
  IExampleProps,
  IExampleStyleProps,
  IExampleStyles
} from './Example.types';
//@ts-ignore

import { ExampleBase } from './ExampleBase';
import { styles } from './Example.styles';

/**
* Example description. Could be a variant of any other component's base.
*/
const Example = styled<IExampleProps, IExampleStyleProps, IExampleStyles>(
  ExampleBase,
  styles
);

export default Example;