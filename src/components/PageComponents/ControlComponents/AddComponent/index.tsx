import React from "react";
import styles from "./AddComponent.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type AddComponentProps = {
  name: string;
  onCreate: (value: string) => void;
  isLoading:boolean
};

const AddComponent: React.FC<AddComponentProps> = ({ name, onCreate, isLoading }) => {
  const [value, setValue] = React.useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onCreateValue = () => {
    onCreate(value);
    setValue("");
  };

  return (
    <div className={styles.root}>
      <h4>{name}</h4>
      <div className={styles.input}>
        <TextField
          name={name}
          value={value}
          onChange={onChangeValue}
          type="text"
          fullWidth
          size="small"
          required
          inputProps={{ maxLength: 30, minLength: 1 }}
        />
        <Button disabled={value.length<1||isLoading} sx={{ marginLeft: "10px" }} onClick={onCreateValue} variant="contained">
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default AddComponent;
