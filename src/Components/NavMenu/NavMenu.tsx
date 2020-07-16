import * as React from 'react';
import { Accordion } from '@fluentui/react-northstar';
import { navMenuLinkGroups } from './navMenuLinkGroups';

const NavMenu = () => {
  return (
    <Accordion
      styles={{ width: 'max-content', margin: '0 auto' }}
      defaultActiveIndex={[0]}
      panels={navMenuLinkGroups}
      exclusive
    />
  );
};

export default NavMenu;
