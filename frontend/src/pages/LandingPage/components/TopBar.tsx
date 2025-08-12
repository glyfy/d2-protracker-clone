import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function TopBar() {
  return (
    <div className="flex p-4 bg-[#072f36] rounded-lg">
      <img src="dota-2-icon.png" className="w-13 h-13" />
      <div className="flex justify-center items-center w-full pl-2 md:pl-0">
        <TextField
          variant="outlined"
          placeholder="Search for players, teams, or matches"
          slotProps={{
            input: {
              sx: {
                borderRadius: 2,
                backgroundColor: '#215059',
                color: 'white',
                fontSize: {
                  xs: '0.8rem', // small devices
                  md: '1.2rem', // desktops
                },
                width: {
                  xs: '280px', // small devices
                  md: '400px',
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}
export default TopBar;
