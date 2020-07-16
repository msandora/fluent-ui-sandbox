import * as React from 'react';
import { Flex, Button } from '@fluentui/react-northstar';
import {
  //ParticipantAddIcon,
  EditIcon,
  ParticipantRemoveIcon,
} from '@fluentui/react-icons-northstar';
import UsersModal from './UsersModal/UsersModal';
//import UsersForm from './UsersForm/UsersForm';
import PanelDemo from './../Test/PanelDemo';

type CardProps = {
  panelName: string;
  paragraph?: string;
};

const UsersCommandBar: React.FunctionComponent<CardProps> = ({
  panelName = 'panel3',
  paragraph = 'Hello World',
}) => {
  return (
    <Flex gap='gap.smaller' padding='padding.medium'>
      <UsersModal />
      <PanelDemo panelName={panelName} paragraph={paragraph} />

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
