import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

type DeleteButtonProps = {
  color?: "inherit" | "primary" | "default" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
  onDelete?: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete = () => undefined, color = "primary" }) => {
  return (
    <IconButton onClick={onDelete} color={color} aria-label="Delete" component="label">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
