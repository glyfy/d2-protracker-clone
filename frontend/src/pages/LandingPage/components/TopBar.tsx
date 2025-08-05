import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
function TopBar() {
  return (
    <div className="flex p-4 bg-red-500 text-white rounded-lg">
      <img src="dota-2-icon.png" className="w-13 h-13" />
      <div className="flex justify-center items-center w-full">
        <TextField
          variant="outlined"
          slotProps={{
            input: {
              sx: {borderRadius: 2},
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            },
          }}
        />
      </div>
    </div>
  );
}
export default TopBar;
