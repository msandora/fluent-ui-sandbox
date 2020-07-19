import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Flex } from '@fluentui/react-northstar';
import {
  BroadcastViewFullscreenIcon,
  ParticipantAddIcon,
  EditIcon,
  UserFriendsIcon,
  CallIcon,
  QuestionCircleIcon,
  AudienceIcon,
  SettingsIcon,
  CallVideoIcon,
  PaperclipIcon,
  VideomailIcon,
  BroadcastViewLeftIcon,
} from '@fluentui/react-icons-northstar';

const buttonStyle = {
  justifyContent: 'start',
  textDecoration: 'none',
};

export const navMenuLinkGroups = [
  {
    title: <Button text content='Buys' styles={buttonStyle} key='buys' />,
    content: (
      <Flex gap='gap.smaller' key='buys-options' column>
        <Button
          as={NavLink}
          to='/northstar'
          icon={<BroadcastViewFullscreenIcon />}
          content='TV Spot Buys'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<BroadcastViewLeftIcon />}
          content='Infomercial Buys'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<QuestionCircleIcon />}
          content='Cost Per Inquiry Buys'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: (
      <Button text content='Dub House' styles={buttonStyle} key='dubHouse' />
    ),
    content: (
      <Flex gap='gap.smaller' key='dubHouse-options' column>
        <Button
          as={NavLink}
          to='/northstar'
          icon={<CallVideoIcon />}
          content='Creative'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<VideomailIcon />}
          content='Dub Requests'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: (
      <Button
        text
        content='Tracking & Attribution'
        styles={buttonStyle}
        key='tracking'
      />
    ),
    content: (
      <Flex gap='gap.smaller' key='tracking-options' column>
        <Button
          as={NavLink}
          to='/northstar'
          icon={<CallIcon />}
          content='DNIS Master List'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<PaperclipIcon />}
          content='DNIS Requests'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: (
      <Button
        text
        content='Campaign Management'
        styles={buttonStyle}
        key='campaignManagement'
      />
    ),
    content: (
      <Flex gap='gap.smaller' key='campaignManagement-options' column>
        <Button
          as={NavLink}
          to='/northstar'
          icon={<AudienceIcon />}
          content='Clients'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<QuestionCircleIcon />}
          content='Products'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<QuestionCircleIcon />}
          content='Campaigns'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: (
      <Button
        text
        content='Account Management'
        styles={buttonStyle}
        key='accountManagement'
      />
    ),
    content: (
      <Flex gap='gap.smaller' key='accountManagement-options' column>
        <Button
          as={NavLink}
          to='/northstar'
          icon={<ParticipantAddIcon />}
          content='Accounts'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<EditIcon />}
          content='Agencies'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<EditIcon />}
          content='Sources'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<EditIcon />}
          content='Markets'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar'
          icon={<EditIcon />}
          content='Talent'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: (
      <Button
        text
        content='System Administration'
        styles={buttonStyle}
        key='system'
      />
    ),
    content: (
      <Flex gap='gap.smaller' key='system-options' column>
        <Button
          as={NavLink}
          to='/northstar/testing'
          icon={<SettingsIcon />}
          content='Agency Settings'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/northstar/users'
          icon={<UserFriendsIcon />}
          content='Users'
          iconPosition='before'
          text
          styles={buttonStyle}
        />
      </Flex>
    ),
  },
];
