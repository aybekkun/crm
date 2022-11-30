import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import AddDrawer from "../../components/AddDrawer";
import BasicPagination from "../../components/BasicPagination";
import AddButton from "../../components/Buttons/AddButton";
import MultiSelect from "../../components/Inputs/MultiSelect";
import SelectInput from "../../components/Inputs/SelectInput";
import TextInput from "../../components/Inputs/TextInput";
import TableGroups from "../../components/PageComponents/GroupsComponents/TableGroups";
import TopInfo from "../../components/TopInfo";
import useForm from "../../hooks/useForm";
import { fetchCourses } from "../../redux/courses/asyncActions";
import { createGroup, fetchGroups } from "../../redux/groups/asyncActions";
import { setPageGroups } from "../../redux/groups/slice";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchTeachers } from "../../redux/teachers/asyncActions";
import styles from "./Groups.module.scss";

type FormValue = {
  name: string;
  course_id: number;
  teacher_id: number;
};

const Groups: React.FC = () => {
  const dispatch = useAppDispatch();
  const { groups, page, isLoading } = useSelector((state: RootState) => state.groups);
  const { courses } = useSelector((state: RootState) => state.courses);
  const { teachers } = useSelector((state: RootState) => state.teachers);

  const [open, setOpen] = React.useState(false);
  const [groupCount, setGroupCount] = React.useState(0);
  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchGroups({ page, cancelToken: cancelToken.token }));

    return () => {
      cancelToken.cancel();
    };
  }, [page, dispatch, groupCount]);

  React.useEffect(() => {
    dispatch(fetchCourses({}));
    dispatch(fetchTeachers({}));
  }, [dispatch]);

  const { formData, setFormData, handleInputChange, resetForm } = useForm<FormValue>({
    name: "",
    course_id: 0,
    teacher_id: 0,
  });
  const onSumbitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(createGroup(formData));
    setOpen(false);
    setGroupCount((prev) => prev + 1);
    resetForm();
  };

  const onAddCourse = (id: number) => {
    setFormData({ ...formData, course_id: id });
  };
  const onAddTeacher = (id: number) => {
    setFormData({ ...formData, teacher_id: id });
  };

  const onChangePage = async (value: number) => {
    await dispatch(setPageGroups(value));
  };

  return (
    <div className={styles.root}>
      <TopInfo name="Группы" onClickAdd={() => setOpen(true)} />
      <TableGroups data={groups.data} isLoading={isLoading} />
      <BasicPagination currentPage={page} pageCount={groups.total} onChangePage={onChangePage} />
      <AddDrawer name="группу" open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSumbitForm}>
          <TextInput name="name" label="Названия" value={formData.name} onChangeInput={handleInputChange} />
          <SelectInput name="Учитель" data={teachers.data} onChangeSelect={onAddTeacher} />
          <SelectInput name="Курс" data={courses.data} onChangeSelect={onAddCourse} />
          <AddButton type="submit" />
        </form>
      </AddDrawer>
    </div>
  );
};

export default Groups;
