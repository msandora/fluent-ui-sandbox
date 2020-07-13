import * as React from 'react';
// import { useState } from 'react';

import { Segment, Grid } from '@fluentui/react-northstar';
import { layoutStyles } from './Layout.styles';
import { NavBar } from '../NavBar/NavBar';
import NavMenu from '../NavMenu/NavMenu';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  // const [navIsVisible, setNavIsVissible] = useState(true);

  return (
    <Grid
      className={layoutStyles.layout_container}
      styles={{
        height: '100vh',
        overflow: 'hidden',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '60px 1fr',
        msGridColumns: '(1fr)[3]',
        msGridRows: '60px 1fr',
      }}
    >
      <Segment
        color='brand'
        content={<NavBar />}
        inverted
        styles={{
          gridColumn: 'span 4',
        }}
      />
      <Segment
        className={layoutStyles.layout_sideBar}
        color='green'
        content={<NavMenu />}
        inverted
        styles={{
          gridColumn: 'span 1',
        }}
      />
      <Segment
        className={layoutStyles.layout_content}
        content={props.children}
        styles={{
          gridColumn: 'span 3',
        }}
      />
    </Grid>
  );
};
