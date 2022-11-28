import React from "react";
import TextField from "@mui/material/TextField";
import { UseFormRegister, FieldValues } from "react-hook-form";
type TextInputProps = {
  label: string;
  name: string;
  onChangeInput: (e:any)=>void;
  value:string | number | "";
};

const TextInput: React.FC<TextInputProps> = ({ name = "", label = "Название",onChangeInput,value }) => {
  // const [inputValue, setInputValue] = React.useState(value);

  // const onChangeValue = (e: any) => {
  //   setInputValue(e.target.value);
  //   onChangeInput(e);
  // };
  return (
    <div style={{ marginBottom: "20px" }}>
      <TextField
        name={name}
        value={value}
        label={label}
        onChange={onChangeInput}
        type="text"
        fullWidth
        size="small"
        required
      />
    </div>
  );
};

export default TextInput;
