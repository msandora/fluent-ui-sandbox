import * as React from 'react';
import { Flex, Button } from '@fluentui/react-northstar';
import {
  ParticipantAddIcon,
  EditIcon,
  ParticipantRemoveIcon,
} from '@fluentui/react-icons-northstar';

const UsersCommandBar = () => {
  return (
    <Flex gap='gap.smaller' padding='padding.medium'>
      <Button
        icon={<ParticipantAddIcon />}
        size='medium'
        content='Add User'
        iconPosition='before'
        secondary
      />
      <Button
        icon={<EditIcon />}
        size='medium'
        content='Edit User'
        iconPosition='before'
        secondary
      />
      <Button
        icon={<ParticipantRemoveIcon />}
        size='medium'
        content='Remove User'
        iconPosition='before'
        secondary
        disabled
      />
    </Flex>
  );
};

export default UsersCommandBar;
