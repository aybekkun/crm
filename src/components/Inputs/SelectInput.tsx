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
  const [selectValue, setSelectValue] = React.useState("");

  React.useEffect(() => {
    setSelectValue("");
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };
  return (
    <div style={{ paddingBottom: "20px" }}>
      <FormControl size="small" fullWidth>
        <InputLabel>{name}</InputLabel>
        <Select value={selectValue} label="Age" onChange={handleChange}>
          {data ? (
            data.map((item) => (
              <MenuItem key={item.id} onClick={() => onChangeSelect(item.id)} value={item.id}>
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
