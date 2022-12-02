import React from "react";
import AddDrawer from "../../components/AddDrawer";
import BasicPagination from "../../components/BasicPagination";
import DateIntput from "../../components/Inputs/DateInput";
import MultiSelect from "../../components/Inputs/MultiSelect";
import NumberInput from "../../components/Inputs/NumberInput";
import TextInput from "../../components/Inputs/TextInput";
import TopInfo from "../../components/TopInfo";

const Students: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <TopInfo name="Студенты" onClickAdd={() => setOpen(true)} />
      <AddDrawer name="Студента" open={open} onClose={() => setOpen(false)}>
        <TextInput name="name" label="Имя" />
        <TextInput name="surname" label="Фамилия" />
        <NumberInput type="tel" name="phone" label="Телефон номер" />
        <MultiSelect name="Группы" data={[]} />
        <DateIntput label="От" />
        <DateIntput label="День рождения  " />
        <TextInput name="adress" label="Адрес" />
        <TextInput name="adress" label="Пароль" />
      </AddDrawer>
      <BasicPagination />
    </div>
  );
};

export default Students;
