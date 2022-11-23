import React from "react";
import styles from "./Header.module.scss";

import { Avatar, Menu } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/login/slice";

const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.login );
  const dispatch = useAppDispatch();

  const [lang, setLang] = React.useState("Ru");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
  const open = Boolean(anchorEl);

  const handleChangeLang = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = ()=>{
    setAnchorEl(null);
    dispatch(logout());
  }

  return (
    <header className={styles.root}>
      <h2>Perfect School</h2>
      <div className={styles.user}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select value={lang} onChange={handleChangeLang} displayEmpty inputProps={{ "aria-label": "Without label" }}>
            <MenuItem value={"Ru"}>Ru</MenuItem>
            <MenuItem value={"En"}>En</MenuItem>
            <MenuItem value={"Kr"}>Kr</MenuItem>
            <MenuItem value={"Uz"}>Uz</MenuItem>
          </Select>
        </FormControl>
        <div onClick={handleClick} className={styles.avatar}>
          <p>{user?.name}</p>
          <Avatar alt="">{user?.name.charAt(0)}</Avatar>
        </div>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem sx={{ display: "flex", justifyContent: "space-between" }} onClick={handleClose}>
            <span>Ф.И.О:</span>
            <span>{user?.name}</span>
          </MenuItem>
          <MenuItem sx={{ display: "flex", justifyContent: "space-between" }} onClick={handleClose}>
            <span>Телефон номер:</span>
            <span>{user?.phone}</span>
          </MenuItem>
          <MenuItem sx={{ display: "flex", justifyContent: "space-between" }} onClick={handleClose}>
            <span>День рождения:</span>
            <span>{user?.birthday}</span>
          </MenuItem>
          <MenuItem sx={{ display: "flex", justifyContent: "space-between" }} onClick={handleClose}>
            <span>Роль:</span>
            <span>{user?.role}</span>
          </MenuItem>
          <MenuItem onClick={onClickLogout}>
            <div style={{ color: "red" }}>Выход</div>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
