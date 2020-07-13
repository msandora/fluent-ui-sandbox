import React from 'react';
import StaticTable from '../Tables/StaticTable';
import { ColorSchemeExample } from '../Test/ColorSchemeExample';
import MenuExample from '../Test/MenuExample';

export const UsersDashboard = () => {
  return (
    <div>
      <ColorSchemeExample />
      <MenuExample />

      <StaticTable />
    </div>
  );
};
