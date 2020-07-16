import * as React from 'react';
import { Table, Flex } from '@fluentui/react-northstar';

const header = {
  items: ['Name', 'Email', 'Phone'],
};

const rowsPlain = [
  {
    key: 1,
    items: ['Mark Sandora', 'marksandora@trueearthhealth.com', '631-255-6333'],
  },
  {
    key: 2,
    items: ['Tim Connor', 'timconnor@trueearthhealth.com', '516-555-6313'],
  },
  {
    key: 3,
    items: ['Adam Roberts', 'adamroberts@trueearthhealth.com', '516-555-2456'],
  },
  {
    key: 4,
    items: ['Mark Sandora', 'marksandora@trueearthhealth.com', '631-255-6333'],
  },
  {
    key: 5,
    items: ['Tim Connor', 'timconnor@trueearthhealth.com', '516-555-6313'],
  },
  {
    key: 6,
    items: ['Adam Roberts', 'adamroberts@trueearthhealth.com', '516-555-2456'],
  },
  {
    key: 7,
    items: ['Mark Sandora', 'marksandora@trueearthhealth.com', '631-255-6333'],
  },
  {
    key: 8,
    items: ['Tim Connor', 'timconnor@trueearthhealth.com', '516-555-6313'],
  },
  {
    key: 9,
    items: ['Adam Roberts', 'adamroberts@trueearthhealth.com', '516-555-2456'],
  },
  {
    key: 10,
    items: ['Mark Sandora', 'marksandora@trueearthhealth.com', '631-255-6333'],
  },
  {
    key: 11,
    items: ['Tim Connor', 'timconnor@trueearthhealth.com', '516-555-6313'],
  },
  {
    key: 12,
    items: ['Adam Roberts', 'adamroberts@trueearthhealth.com', '516-555-2456'],
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
