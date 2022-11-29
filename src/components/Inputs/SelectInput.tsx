import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ICourseData } from "../../redux/courses/types";
import { ITeacherData, ITeachers } from "../../redux/teachers/types";

type SelectProps = {
  data: ICourseData[] | ITeacherData[];
  name?: string;
  onChangeSelect?: (ids: number) => void;
};

const SelectInput: React.FC<SelectProps> = ({ data, name = "select", onChangeSelect = () => undefined }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <div style={{ paddingBottom: "20px" }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select value={value} label="Age" onChange={handleChange}>
          {data ? (
            data.map((item) => (
              <MenuItem onClick={() => onChangeSelect(item.id)} value={item.id}>
                {item.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem>Loading...</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
