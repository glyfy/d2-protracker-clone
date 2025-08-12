import TopBar from '@/pages/LandingPage/components/TopBar';
import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';
function LandingPage() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <TopBar />
      <Tabs
        value={value}
        onChange={handleChange}
        slotProps={{
          indicator: {
            sx: {
              display: 'none',
            },
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Carry" />
        <Tab label="Mid" />
        <Tab label="Off" />
        <Tab label="Pos 4" />
        <Tab label="Pos 5" />
      </Tabs>
    </>
  );
}

export default LandingPage;
