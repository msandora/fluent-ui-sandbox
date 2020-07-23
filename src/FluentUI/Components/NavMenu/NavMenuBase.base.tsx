// Documentation: ComponentName.base.tsx
// https://github.com/microsoft/fluentui/wiki/Component-Anatomy#componentnamebasetsx
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { navMenuLinkGroups } from './navMenuLinkGroups';
// Fluent UI
import { Nav, INavLink } from '@fluentui/react/lib/Nav';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import { getTheme } from '@fluentui/react';
// Anatomy imports
import { styles } from './NavMenu.styles';
import {
  INavMenuStyleProps,
  INavMenuStyles,
  INavMenuProps,
} from './NavMenu.types';

const NavMenuBase = (props: INavMenuProps) => {
  const history = useHistory();
  const getClassNames = classNamesFunction<INavMenuStyleProps, INavMenuStyles>();
  const theme = getTheme();
  const classNames = getClassNames(styles, { theme });

  const handleLinkClick = (
    ev?: React.MouseEvent<HTMLElement>,
    item?: INavLink
  ) => {
    if (ev && item) {
      ev.preventDefault();
      history.push(item.url);
    }
  };

  return (
    <React.Fragment>
      <Nav
        ariaLabel='Nav with nested links'
        groups={navMenuLinkGroups}
        styles={{
          root: {
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
        onLinkClick={handleLinkClick}
      />
    </React.Fragment>
  );
};

export default NavMenuBase;

