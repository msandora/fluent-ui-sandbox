import * as React from 'react';
import { useState } from 'react';
import { Segment, Grid, Flex } from '@fluentui/react-northstar';
import { NavBar } from '../NavBar/NavBar';
import NavMenu from '../NavMenu/NavMenu';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  const [navIsVisible, setNavIsVissible] = useState(true);

  return (
    <div>
      <Grid
        styles={{
          height: '100vh',
          overflow: 'hidden',
          gridTemplateColumns: 'repeat(4, 1fr)',
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
            height: 50,
            gridColumn: 'span 4',
          }}
        />
        <Flex
          style={{
            minHeight: '50px',
          }}
        >
          <Flex.Item size='size.full'>
            <Segment content='full' />
          </Flex.Item>
        </Flex>

        <Flex
          style={{
            minHeight: 'calc(100vh - 50px)',
          }}
        >
          <Flex.Item size='size.half'>
            <Segment content="Full-height, even when my content doesn't fill the space." />
          </Flex.Item>

          <Flex.Item size='size.half'>
            <Segment content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.' />
          </Flex.Item>
        </Flex>
      </Grid>
      {/* <Grid
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
            overflow: 'auto',
            height: 'calc(100vh - 45px)',
          }}
        />
        <Segment
          content={props.children}
          inverted
          styles={{
            gridColumn: 'span 4',
          }}
        />
      </Grid> */}
    </div>
  );
};
