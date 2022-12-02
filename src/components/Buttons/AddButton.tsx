import { Button, SxProps, Theme } from "@mui/material";
import React from "react";
type AddButtonProps = {
  id?: number;
  onAdd?: () => void;
  label?: string;
  type?: "submit" | "button" | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
  sx?: SxProps<Theme> | undefined;
};
const AddButton: React.FC<AddButtonProps> = ({
  type,
  onAdd = () => undefined,
  label = "Добавить",
  variant = "contained",
  sx = undefined,
}) => {
  return (
    <Button type={type} sx={sx} onClick={onAdd} variant={variant}>
      {label}
    </Button>
  );
};

export default AddButton;
