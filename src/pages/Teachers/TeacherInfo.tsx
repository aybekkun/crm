import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddDrawer from "../../components/AddDrawer";
import AddButton from "../../components/Buttons/AddButton";
import DeatailGroups from "../../components/DetailGroups";
import DeatailInfo from "../../components/DetailInfo";
import DateInput from "../../components/Inputs/DateInput";
import MultiSelect from "../../components/Inputs/MultiSelect";
import NumberInput from "../../components/Inputs/NumberInput";
import TextInput from "../../components/Inputs/TextInput";
import TopInfoPersonal from "../../components/TopInfoPersonal";
import useForm from "../../hooks/useForm";
import { fetchCourses } from "../../redux/courses/asyncActions";
import { RootState, useAppDispatch } from "../../redux/store";
import { deleteTeacher, fetchOneTeacher, updateTeacher } from "../../redux/teachers/asyncActions";
import { ITeachersForm } from "../../redux/teachers/types";
import styles from "./Teachers.module.scss";
const TeacherInfo: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { teacher } = useSelector((state: RootState) => state.teachers);
  const { courses } = useSelector((state: RootState) => state.courses);

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [teacherCount, setTeacherCount] = React.useState(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async () => {
      await dispatch(fetchOneTeacher({ id, cancelToken: cancelToken.token }));
      await dispatch(fetchCourses({ cancelToken: cancelToken.token }));
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [dispatch, id, teacherCount]);

  React.useEffect(() => {
    setFormData({
      id: Number(id),
      name: teacher ? teacher.name : "",
      surname: teacher ? teacher.surname : "",
      phone: teacher ? teacher.phone : "",
      birthday: teacher ? teacher.birthday : "",
      address: teacher ? teacher.address : "",
      password: "",
      course_ids: [],
      percent: teacher ? teacher.percent : 0,
    });
  }, [teacher]);

  const { formData, setFormData, handleInputChange, resetForm } = useForm<ITeachersForm>({
    id: Number(id),
    name: "",
    surname: "",
    phone: "",
    birthday: "",
    address: "",
    password: "",
    course_ids: [],
    percent: 0,
  });

  const onSumbitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    if (formData.password && formData.password.length > 4) {
      await dispatch(updateTeacher(formData));
    } else {
      const { password, ...create } = formData;
      await dispatch(updateTeacher(create));
    }
    setTeacherCount((prev) => prev + 1);
    setOpen(false);
  };
  const onAddDate = (value: string) => {
    setFormData({ ...formData, birthday: value });
  };

  const onAddCourse = (ids: number[]) => {
    setFormData({ ...formData, course_ids: ids });
  };

  const onDeleteItem = async () => {
    if (confirm("Вы точно хотите удалить")) {
      await dispatch(deleteTeacher(Number(id)));
      navigate(-1);
    }
  };
  return (
    <div className={styles.root}>
      <TopInfoPersonal name="Информация об учителе" />
      <div className={styles.info}>
        <div className={styles.detail}>
          <DeatailInfo data={teacher} onEdit={() => setOpen(true)} onDelete={onDeleteItem} />
          <DeatailGroups data={teacher?.groups} />
        </div>
        <div className={styles.table}>
          <h3>Tableas</h3>
          <h3>Tableas</h3>
          <h3>Tableas</h3>
        </div>
      </div>
      <AddDrawer name="новые данные" open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSumbitForm}>
          <TextInput name="name" label="Имя" value={formData.name} onChangeInput={handleInputChange} />
          <TextInput name="surname" label="Фамилия" value={formData.surname} onChangeInput={handleInputChange} />
          <NumberInput name="phone" type="tel" value={formData.phone} onChangeInput={handleInputChange} />
          <DateInput onChangeDate={onAddDate} date={formData.birthday} label="Дата рождения" />
          <TextInput name="address" label="Адрес" value={formData.address} onChangeInput={handleInputChange} />
          <TextInput
            required={false}
            name="password"
            label="Пароль"
            value={formData.password}
            onChangeInput={handleInputChange}
          />
          <NumberInput name="percent" label="Процент" value={formData.percent} onChangeInput={handleInputChange} />
          <MultiSelect name="Курсы" data={courses.data} indexes={formData.course_ids} onChangeSelect={onAddCourse} />
          <AddButton type="submit" />
        </form>
      </AddDrawer>
    </div>
  );
};

export default TeacherInfo;
