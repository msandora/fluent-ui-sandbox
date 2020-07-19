import * as React from 'react';
import { Table, Flex } from '@fluentui/react-northstar';

const header = {
  items: ['Name', 'Email', 'Phone'],
};

const rowsPlain = [
  {
    key: 1,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '631-255-6333'],
  },
  {
    key: 2,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-6313'],
  },
  {
    key: 3,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-2456'],
  },
  {
    key: 4,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '631-255-6333'],
  },
  {
    key: 5,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-6313'],
  },
  {
    key: 6,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-2456'],
  },
  {
    key: 7,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '631-255-6333'],
  },
  {
    key: 8,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-6313'],
  },
  {
    key: 9,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-2456'],
  },
  {
    key: 10,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '631-255-6333'],
  },
  {
    key: 11,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-6313'],
  },
  {
    key: 12,
    items: ['Lorem ipsum', 'Lorem ipsum dolor sit amet', '516-555-2456'],
  },
];

const UsersDetailsList = () => {
  return (
    <Flex
      gap='gap.smaller'
      padding='padding.medium'
      styles={{ overflow: 'scroll', height: 'calc(100vh - 110px)' }}
    >
      <Table
        compact
        header={header}
        rows={rowsPlain}
        aria-label='Compact view static table'
      />
    </Flex>
  );
};

export default UsersDetailsList;
