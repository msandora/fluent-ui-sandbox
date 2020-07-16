import * as React from 'react';
import { Button, Flex, Avatar, Text } from '@fluentui/react-northstar';
import { AcceptIcon, MenuIcon } from '@fluentui/react-icons-northstar';

export const NavBar = () => {
  return (
    <Flex
      space='between'
      gap='gap.smaller'
      padding='padding.medium'
      styles={{ height: '50px !important' }}
    >
      <Button
        icon={
          <MenuIcon
            styles={({ theme: { siteVariables } }) => ({
              color: siteVariables.colorScheme.brand.background1,
            })}
          />
        }
        content={<Text content='Sandbox' color='white' />}
        iconPosition='before'
        text
      />
      <Flex gap='gap.small'>
        <Text content='John Doe' color='white' />
        <Avatar
          name='John Doe'
          image='/images/user.png'
          size='small'
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
