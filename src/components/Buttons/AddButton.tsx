import { Button, SxProps, Theme } from "@mui/material";
import React from "react";
type AddButtonProps = {
  id?: number;
  onAdd?: () => void;
  variant?: "text" | "contained" | "outlined" | undefined;
  sx?: SxProps<Theme> | undefined;
};
const AddButton: React.FC<AddButtonProps> = ({ onAdd = () => undefined, variant = "contained", sx = undefined }) => {
  return (
    <Button sx={sx} onClick={onAdd} variant={variant}>
      Добавить
    </Button>
  );
};

export default AddButton;
