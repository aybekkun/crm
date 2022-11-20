import React from "react";
import styles from "./Header.module.scss";

import { Avatar } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Header: React.FC = () => {
  const [age, setAge] = React.useState("Ru");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <header className={styles.header}>
      <h2>Perfect School</h2>
      <div className={styles.user}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select 
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"Ru"}>Ru</MenuItem>
            <MenuItem value={"En"}>En</MenuItem>
            <MenuItem value={"Kr"}>Kr</MenuItem>
            <MenuItem value={"Uz"}>Uz</MenuItem>
          </Select>
        </FormControl>
        <p>Aybek Amanbaev</p>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </header>
  );
};

export default Header;
