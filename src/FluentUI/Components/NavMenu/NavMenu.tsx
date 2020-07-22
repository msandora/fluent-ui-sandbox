import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { navMenuLinkGroups } from './navMenuLinkGroups';
// Fluent UI
import { Nav, INavLink } from '@fluentui/react/lib/Nav';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import {
  INavMenuStyleProps,
  INavMenuStyles,
  INavMenuProps,
} from './NavMenu.types';

const getClassNames = classNamesFunction<INavMenuStyleProps, INavMenuStyles>();

const NavMenu = (props: INavMenuProps) => {
  const history = useHistory();

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

export default NavMenu;
