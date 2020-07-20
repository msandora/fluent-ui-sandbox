import * as React from 'react';
import TalentDetailsList from './TalentDetailsList';
import TalentCommandBar from './TalentCommandBar';

export const TalentDashboard = () => {
  return (
    <div>
      <TalentCommandBar />
      <TalentDetailsList />
    </div>
  );
};
