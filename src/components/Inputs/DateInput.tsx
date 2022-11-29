import React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { type } from "os";

type DataInputProps = {
  label?: string;
  date?: string | null;
  onChangeDate?: (val: string) => void;
};

const DateIntput: React.FC<DataInputProps> = ({
  label = "label",
  date = "01-06-1999",
  onChangeDate = () => undefined,
}) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));
  React.useEffect(() => {
    setValue(null);
  }, []);
  const handleChange = (value: Dayjs | null) => {
    setValue(value);
    const newFormat = value?.format("YYYY-MM-DD") || "";
    onChangeDate(newFormat);
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          inputFormat="DD-MM-YYYY"
          label={label}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateIntput;
