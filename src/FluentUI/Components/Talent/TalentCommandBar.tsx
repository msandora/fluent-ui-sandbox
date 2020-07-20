import * as React from 'react';
import { CommandBar } from '@fluentui/react/';

const TalentCommandBar = () => {
  return (
    <div>
      <CommandBar
        items={[
          {
            key: 'addTalent',
            name: 'Add Talent',
            iconProps: { iconName: 'AddFriend' },
            onClick: () => alert('Add Talent'),
          },
          {
            key: 'editTalent',
            name: 'Edit Talent',
            iconProps: { iconName: 'AccountManagement' },
            onClick: () => alert('Edit Talent'),
          },
          {
            key: 'removeTalent',
            name: 'Remove Talent',
            iconProps: { iconName: 'UserRemove' },
            onClick: () => alert('Remove Talent'),
          },
        ]}
      />
    </div>
  );
};

export default TalentCommandBar;
