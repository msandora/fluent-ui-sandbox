import React from 'react';
import UsersDetailsList from '../Users/UsersDetailsList';
import UsersCommandBar from './UsersCommandBar';
import UsersModal from '';


export const UsersDashboard = () => {
  return (
    <div>
      <UsersCommandBar />
      <UsersDetailsList />
    </div>
  );
};
