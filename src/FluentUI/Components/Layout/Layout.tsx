import * as React from 'react';
import { useState } from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { layoutStyles } from './Layout.styles';
import Header from '../Header/Header';
import NavMenu from '../../../FluentUI/Components/NavMenu/NavMenu';

const stackTokens: IStackTokens = {
  childrenGap: 20,
};

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  //const classNames: any = appStyles();

  const [navIsVisible, setNavIsVissible] = useState(true);
  // const [loadingMessage, setLoadingMessage] = useState<string>('');

  return (
    <Stack>
      <Header onToggleNavButton={() => setNavIsVissible(!navIsVisible)} />

      <Stack
        horizontal
        grow
        className={layoutStyles.layout_container}
        tokens={stackTokens}
      >
        <Stack.Item
          grow={1}
          className={layoutStyles.layout_sideBar}
          styles={{
            root: {
              maxWidth: navIsVisible ? 230 : 45,
              minWidth: navIsVisible ? 230 : 45,
            },
          }}
        >
          <NavMenu />
        </Stack.Item>

        <Stack.Item grow={2} className={layoutStyles.layout_content}>
          {props.children}
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default Layout;
