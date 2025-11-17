import TopBar from '@/pages/LandingPage/components/TopBar';
import { Tabs, Tab } from '@mui/material';
import TopHeroesPlayersTable from '@/pages/LandingPage/components/TopHeroesPlayersTable';
import { useState } from 'react';
function LandingPage() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <TopBar />
      <TopHeroesPlayersTable />
    </>
  );
}

export default LandingPage;
