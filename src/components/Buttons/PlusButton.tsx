import React from "react";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
type PlusButtonProps = {
  color?: "inherit" | "primary" | "default" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
  onEdit?: () => void;
};

const PlusButton: React.FC<PlusButtonProps> = ({ onEdit = () => undefined, color = "primary" }) => {
  return (
    <IconButton onClick={onEdit} color={color} aria-label="Edit" component="label">
      <AddCircleOutlineIcon />
    </IconButton>
  );
};

export default PlusButton;
