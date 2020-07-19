import React from 'react';
import UsersDetailsList from './UsersDetailsList';
import UsersCommandBar from './UsersCommandBar';

export const UsersDashboard = () => {
  return (
    <div>
      <UsersCommandBar />
      <UsersDetailsList />
    </div>
  );
};
