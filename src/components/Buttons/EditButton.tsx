import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type EditButtonProps = {
  color?: "inherit" | "primary" | "default" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
  onEdit?: () => void;
};

const EditButton: React.FC<EditButtonProps> = ({ onEdit = () => undefined, color = "primary" }) => {
  return (
    <IconButton onClick={onEdit} color={color} aria-label="Edit" component="label">
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
