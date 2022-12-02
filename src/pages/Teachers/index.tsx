import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AddDrawer from "../../components/AddDrawer";
import BasicPagination from "../../components/BasicPagination";
import AddButton from "../../components/Buttons/AddButton";
import DateInput from "../../components/Inputs/DateInput";
import MultiSelect from "../../components/Inputs/MultiSelect";
import NumberInput from "../../components/Inputs/NumberInput";
import TextInput from "../../components/Inputs/TextInput";
import TableTeachers from "../../components/PageComponents/TeachersComponents/TableTeachers";
import TopInfo from "../../components/TopInfo";
import useForm from "../../hooks/useForm";
import { fetchCourses } from "../../redux/courses/asyncActions";
import { RootState, useAppDispatch } from "../../redux/store";
import { createTeacher, fetchTeachers } from "../../redux/teachers/asyncActions";
import { setPageTeachers } from "../../redux/teachers/slice";
import { ITeachersForm } from "../../redux/teachers/types";

const Teachers: React.FC = () => {
  const dispatch = useAppDispatch();
  const { teachers, page, isLoading } = useSelector((state: RootState) => state.teachers);
  const { courses } = useSelector((state: RootState) => state.courses);

  const [teachersCount, setTeachersCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { formData, setFormData, handleInputChange, resetForm } = useForm<ITeachersForm>({
    id: 0,
    name: "",
    surname: "",
    phone: "",
    birthday: "",
    address: "",
    password: "",
    course_ids: [],
    percent: 0,
  });

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchTeachers({ page, cancelToken: cancelToken.token }));
    dispatch(fetchCourses({ page, cancelToken: cancelToken.token }));
    return () => {
      cancelToken.cancel();
    };
  }, [page, dispatch, teachersCount]);

  const onSumbitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, ...create } = formData;
    await dispatch(createTeacher(create));
    setTeachersCount((prev) => prev + 1);
    resetForm();
    setOpen(false);
  };

  const onAddItem = () => {
    setOpen(true);
  };

  const onAddDate = (value: string) => {
    setFormData({ ...formData, birthday: value });
  };

  const onAddCourse = (ids: number[]) => {
    setFormData({ ...formData, course_ids: ids });
  };

  const onChangePage = async (value: number) => {
    await dispatch(setPageTeachers(value));
  };

  return (
    <div>
      <TopInfo name="Учителья" onClickAdd={onAddItem} />
      <TableTeachers data={teachers.data} isLoading={isLoading} />
      <BasicPagination currentPage={page} pageCount={teachers.total} onChangePage={onChangePage} />
      <AddDrawer name="учителья" open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSumbitForm}>
          <TextInput name="name" label="Имя" value={formData.name} onChangeInput={handleInputChange} />
          <TextInput name="surname" label="Фамилия" value={formData.surname} onChangeInput={handleInputChange} />
          <NumberInput name="phone" type="tel" value={formData.phone} onChangeInput={handleInputChange} />
          <DateInput onChangeDate={onAddDate} date={formData.birthday} label="Дата рождения" />
          <TextInput name="address" label="Адрес" value={formData.address} onChangeInput={handleInputChange} />
          <TextInput name="password" label="Пароль" value={formData.password} onChangeInput={handleInputChange} />
          <NumberInput name="percent" label="Процент" value={formData.percent} onChangeInput={handleInputChange} />
          <MultiSelect name="Курсы" data={courses.data} indexes={formData.course_ids} onChangeSelect={onAddCourse} />
          <AddButton type="submit" />
        </form>
      </AddDrawer>
    </div>
  );
};

export default Teachers;
