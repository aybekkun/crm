import React from "react";
import TextField from "@mui/material/TextField";
import { UseFormRegister, FieldValues } from "react-hook-form";
type TextInputProps = {
  type?: "text" | "password";
  label?: string;
  name?: string;
  onChangeInput?: (e: any) => void;
  value?: string | number | "";
  required?: true | false;
};

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  name = "",
  required = true,
  label = "Название",
  onChangeInput = () => undefined,
  value = "",
}) => {
  // const [inputValue, setInputValue] = React.useState(value);

  // const onChangeValue = (e: any) => {
  //   setInputValue(e.target.value);
  //   onChangeInput(e);
  // };
  const inputProps = name === "password" ? { minLength: 5 } : { minLength: 2 };

  return (
    <div style={{ marginBottom: "20px" }}>
      <TextField
        name={name}
        value={value}
        label={label}
        onChange={onChangeInput}
        type={type}
        fullWidth
        size="small"
        helperText={name === "password" ? "Не короче 5 символов" : ""}
        inputProps={{ ...inputProps }}
        required={required}
      />
    </div>
  );
};

export default TextInput;
