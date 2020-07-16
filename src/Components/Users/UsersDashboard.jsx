import React from 'react';
import UsersDetailsList from '../Users/UsersDetailsList';
import UsersCommandBar from './UsersCommandBar';

export const UsersDashboard = () => {
  return (
    <div>
      <UsersCommandBar />
      <UsersDetailsList />
    </div>
  );
};
