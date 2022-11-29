import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { ICourseData } from "../../redux/courses/types";
import { TextField } from "@mui/material";
import { ITeacherData } from "../../redux/teachers/types";
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type MultiSelectProps = {
  data: ICourseData[]|ITeacherData[];
  name?: string;
  indexes?: number[] | undefined;
  onChangeSelect?: (ids: number[]) => void;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  data,
  indexes = [],
  name = "Селект",
  onChangeSelect = () => undefined,
}) => {
  const [ids, setIds] = React.useState<number[]>(indexes);
  const [courses, setCourses] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (ids) {
      setCourses([]);
    }
  }, []);
  const handleChange = (event: SelectChangeEvent<typeof courses>) => {
    const value = event.target.value;
    setCourses(typeof value === "string" ? value.split(",") : value);
  };

  const onClickItem = (idx: number) => {
    const isThere = ids.some((id) => id === idx);
    if (!isThere) {
      setIds((prev) => [...prev, idx]);
      onChangeSelect(ids);
    }
    if (isThere) {
      const newIds = ids.filter((item) => item !== idx);
      setIds(newIds);
      onChangeSelect(ids);
    }
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
        <Select
          multiple
          value={courses}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {data.map((item) => (
            <MenuItem onClick={() => onClickItem(item.id)} key={item.id} value={item.name}>
              <Checkbox checked={courses.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelect;
