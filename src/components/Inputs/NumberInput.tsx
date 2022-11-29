import React from "react";
import TextField from "@mui/material/TextField";
type NumberInputProps = {
  type?: "number" | "tel";
  label?: string;
  name?: string;
  onChangeInput?: (e: any) => void;
  value?: string | number;
};

const NumberInput: React.FC<NumberInputProps> = ({
  type = "tel",
  name = "number",
  label = "Номер",
  onChangeInput = () => undefined,
  value = 0,
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [error, setError] = React.useState(false);
  const onChangeValue = (e: any) => {
    if (type === "number") {
      if (e.target.value.toString().length < 20 && e.target.value >= 0) {
        setInputValue(e.target.value);
        onChangeInput(e);
        setError(false);
      } else {
        setError(true);
      }
    }
    if (type === "tel") {
      setInputValue(e.target.value);
      onChangeInput(e);
    }
  };
  return (
    <div style={{ paddingBottom: "20px" }}>
      <TextField
        name={name}
        value={value}
        label={label}
        onChange={onChangeValue}
        type={type}
        fullWidth
        size="small"
        error={error}
        helperText={error && `Укажите ${label.toLowerCase()} правильно`}
        required
        inputProps={{ maxLength: 30, minLength: 1 }}
      />
    </div>
  );
};

export default NumberInput;
