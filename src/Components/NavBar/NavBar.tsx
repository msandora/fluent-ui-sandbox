import * as React from 'react';
import { Button, Flex, Avatar, Text } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

export const NavBar = () => {
  return (
    <Flex space='between' gap='gap.smaller' padding='padding.medium'>
      <Button
        icon={<AcceptIcon />}
        content='Sandbox'
        iconPosition='before'
        text       
      />
      <Flex gap='gap.small'>
        <Text content='John Doe' color='white' />
        <Avatar
          name='John Doe'
          image='/images/user.png'
          size='medium'
          status={{
            color: 'green',
            icon: <AcceptIcon />,
            title: 'Available',
          }}
        />
      </Flex>
    </Flex>
  );
};
