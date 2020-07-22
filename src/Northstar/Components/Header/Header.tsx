import * as React from 'react';
import { Button, Flex, Avatar, Text } from '@fluentui/react-northstar';
import { AcceptIcon, MenuIcon } from '@fluentui/react-icons-northstar';

export interface IHeaderProps {
  children?: React.ReactNode;
  onToggleNavButton(): void;
}

export const Header = (props: IHeaderProps) => {
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
          onClick={props.onToggleNavButton}
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
        <Text content='John Doe' color='white' styles={{lineHeight: '28px'}} />
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
