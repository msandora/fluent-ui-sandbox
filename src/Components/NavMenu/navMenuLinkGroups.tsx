import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Flex } from '@fluentui/react-northstar';
import {
  ParticipantAddIcon,
  EditIcon,
  ParticipantRemoveIcon,
} from '@fluentui/react-icons-northstar';

const buttonStyle = {
  justifyContent: 'start',
  textDecoration: 'none'
};

export const navMenuLinkGroups = [
  {
    title: <Button text content='Buys' styles={buttonStyle} key='buys' />,
    content: (
      <Flex gap='gap.smaller' key='buys-options' column>
        <Button
          as={NavLink}
          to='/TVSpotBuys'
          icon={<ParticipantAddIcon />}
          content='TV Spot Buys'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/InfomercialBuys'
          icon={<EditIcon />}
          content='Infomercial Buys'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/CostPerInquiryBuys'
          icon={<ParticipantRemoveIcon />}
          content='Cost Per Inquiry Buys'
          iconPosition='before'
          text styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: <Button text content='Dub House' styles={buttonStyle} key='dubHouse'/>,
    content: (
      <Flex gap='gap.smaller' key='dubHouse-options' column>
        <Button
          as={NavLink}
          to='/videoproductions'
          icon={<ParticipantAddIcon />}
          content='Creative'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/videodubrequests'
          icon={<EditIcon />}
          content='Dub Requests'
          iconPosition='before'
          text styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: <Button text content='Tracking & Attribution' styles={buttonStyle} key='tracking'/>,
    content: (
      <Flex gap='gap.smaller' key='tracking-options' column>
        <Button
          as={NavLink}
          to='/dnis'
          icon={<ParticipantAddIcon />}
          content='DNIS Master List'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/dnisrequest'
          icon={<EditIcon />}
          content='DNIS Requests'
          iconPosition='before'
          text styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: <Button text content='Campaign Management' styles={buttonStyle} key='campaignManagement'/>,
    content: (
      <Flex gap='gap.smaller' key='campaignManagement-options' column>
        <Button
          as={NavLink}
          to='/clients'
          icon={<ParticipantAddIcon />}
          content='Clients'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/products'
          icon={<EditIcon />}
          content='Products'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/Campaigns'
          icon={<EditIcon />}
          content='Campaigns'
          iconPosition='before'
          text styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: <Button text content='Account Management' styles={buttonStyle} key='accountManagement'/>,
    content: (
      <Flex gap='gap.smaller' key='accountManagement-options' column>
        <Button
          as={NavLink}
          to='/accounts'
          icon={<ParticipantAddIcon />}
          content='Accounts'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/agencies'
          icon={<EditIcon />}
          content='Agencies'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/sources'
          icon={<EditIcon />}
          content='Sources'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/markets'
          icon={<EditIcon />}
          content='Markets'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/talent'
          icon={<EditIcon />}
          content='Talent'
          iconPosition='before'
          text styles={buttonStyle}
        />
      </Flex>
    ),
  },
  {
    title: <Button text content='System Administration' styles={buttonStyle}key='system'/>,
    content: (
      <Flex gap='gap.smaller' key='system-options' column>
        <Button
          as={NavLink}
          to='/testing'
          icon={<ParticipantAddIcon />}
          content='Agency Settings'
          iconPosition='before'
          text styles={buttonStyle}
        />
        <Button
          as={NavLink}
          to='/users'
          icon={<EditIcon />}
          content='Users'
          iconPosition='before'
          text styles={buttonStyle}
        />
      </Flex>
    ),
  },
];
