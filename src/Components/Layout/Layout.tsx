import * as React from 'react';
import { useState } from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import NavMenu from '../NavMenu/NavMenu';
import { NavBar } from '../NavBar/NavBar';
import { Segment } from '@fluentui/react-northstar';
import { layoutStyles } from './Layout.styles';

const stackTokens: IStackTokens = {
  childrenGap: 20,
};

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  //const classNames: any = appStyles();

  const [navIsVisible, 
    //setNavIsVissible
  ] = useState(true);
  // const [loadingMessage, setLoadingMessage] = useState<string>('');

  return (
    <Stack>
      <Segment
        content={<NavBar />}
        inverted
        styles={({ theme: { siteVariables } }) => ({
          backgroundColor: siteVariables.colorScheme.brand.background2,
        })}
      />
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
          <Segment
            content={<NavMenu />}
            styles={({ theme: { siteVariables } }) => ({
              backgroundColor: siteVariables.colorScheme.brand.black,
              gridColumn: 'span 1',
              overflowY: 'auto',
              height: 'calc(100vh - 50px)',
            })}
          />
        </Stack.Item>

        <Stack.Item grow={2} className={layoutStyles.layout_content}>
          <Segment
            content={props.children}
            inverted
            styles={({ theme: { siteVariables } }) => ({
              backgroundColor: siteVariables.colorScheme.brand.white,
              gridColumn: 'span 4',
            })}
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default Layout;
