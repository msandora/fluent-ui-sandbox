import React from 'react';
import { Dialog, Button } from '@fluentui/react-northstar';
import { ParticipantAddIcon } from '@fluentui/react-icons-northstar';
import UsersForm  from '../UsersForm/UsersForm';

const UsersModal = () => {
  return (
    <Dialog 
      // open
      cancelButton='Cancel'
      confirmButton='Save User'
      content={<UsersForm />}
      header='Add User'
      headerAction={null}
      trigger={
        <Button
          icon={<ParticipantAddIcon />}
          size='medium'
          content='Add User'
          iconPosition='before'
          secondary
        />
      }
    />
  );
};

export default UsersModal;
