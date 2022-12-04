import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RootState, useAppDispatch } from "../../../redux/store";
import { setCurrentMonth } from "../../../redux/groups/slice";
import { useSelector } from "react-redux";

export const monthsName = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"];

export const monthIndex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type JournalTabsProps = {
  data: number[];
  onChange: (key: number) => void;
};

const JournalTabs: React.FC<JournalTabsProps> = ({ data, onChange }) => {
  const dispatch = useAppDispatch();
  const { currentMonth } = useSelector((state: RootState) => state.groups);
  const [value, setValue] = React.useState(currentMonth);

  // React.useEffect(() => {
  //   setValue(currentMonth);
  //   console.log(currentMonth);
  // }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {data.map((item, i) => (
            <Tab value={item} label={monthsName[item - 1]} key={item} {...a11yProps(item)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default JournalTabs;
