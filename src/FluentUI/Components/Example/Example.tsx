//@ts-ignore
import { styled } from '../../Utilities';
import {
  ExampleProps,
  IExampleStyleProps,
  IExampleStyles
} from './Example.types';
//@ts-ignore

import { ExampleBase } from './ExampleBase';
import { styles } from './Example.styles';

/**
* Example description. Could be a variant of any other component's base.
*/
const Example = styled<ExampleProps, IExampleStyleProps, IExampleStyles>(
  ExampleBase,
  styles
);

export default Example;