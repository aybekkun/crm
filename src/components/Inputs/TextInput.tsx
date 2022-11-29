import React from "react";
import TextField from "@mui/material/TextField";
import { UseFormRegister, FieldValues } from "react-hook-form";
type TextInputProps = {
  type?:"text"| "password";
  label?: string;
  name?: string;
  onChangeInput?: (e:any)=>void;
  value?:string | number | "";
};

const TextInput: React.FC<TextInputProps> = ({type="text", name = "", label = "Название",onChangeInput = ()=>undefined,value = "" }) => {
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
        type={type}
        fullWidth
        size="small"
        required
      />
    </div>
  );
};

export default TextInput;
