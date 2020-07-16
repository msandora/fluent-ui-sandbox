import * as React from 'react';
// import { useState } from 'react';
import { Segment, Grid } from '@fluentui/react-northstar';
import { NavBar } from '../NavBar/NavBar';
import NavMenu from '../NavMenu/NavMenu';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
 // const [navIsVisible, setNavIsVissible] = useState(true);

  return (
    <Grid
      styles={{
        height: '100vh',
        overflow: 'hidden',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'max-content 1fr',
        // msGridColumns: '(1fr)[3]',
        // msGridRows: '45px 1fr',
      }}
    >
      <Segment
        color='brand'
        content={<NavBar />}
        inverted
        styles={{
          gridColumn: 'span 5',
        }}
      />
      <Segment
        content={<NavMenu />}
        styles={{
          gridColumn: 'span 1',
          overflowY: 'auto',
          height: 'calc(100vh - 55px)' 
        }}
      />
      <Segment
        content={props.children}
        inverted
        styles={{
          gridColumn: 'span 4',
        }}
      />
    </Grid>
  );
};
