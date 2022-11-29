import axios from "axios";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import AddDrawer from "../../components/AddDrawer";
import BasicPagination from "../../components/BasicPagination";
import AddButton from "../../components/Buttons/AddButton";
import NumberInput from "../../components/Inputs/NumberInput";
import TextInput from "../../components/Inputs/TextInput";
import TableCourses from "../../components/PageComponents/CoursesComponents/TableCourses";
import TopInfo from "../../components/TopInfo";
import { createCourse, deleteCourse, fetchCourses, updateCourse } from "../../redux/courses/asyncActions";
import { setPageCourses } from "../../redux/courses/slice";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./Courses.module.scss";
import useForm from "../../hooks/useForm";
type FormValues = {
  id: number;
  name: string;
  price: number;
  duration: number;
};

const Courses: React.FC = () => {
  const dispatch = useAppDispatch();
  const { courses, page, isLoading } = useSelector((state: RootState) => state.courses);

  const [courseCount, setCourseCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const [typeSubmit, setTypeSubmit] = React.useState<"add" | "edit">("add");
  
  const { formData, setFormData, handleInputChange } = useForm<FormValues>({
    id: 0,
    name: "",
    price: 0,
    duration: 0,
  });

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchCourses({ page, cancelToken: cancelToken.token }));
    return () => {
      cancelToken.cancel();
    };
  }, [page, dispatch, courseCount]);

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeSubmit === "add") {
      const { id, ...create } = formData;
      await dispatch(createCourse(create));
      setFormData({ id: 0, name: "", price: 0, duration: 0 });
      setCourseCount((prev) => prev + 1);
    } else if (typeSubmit === "edit") {
      await dispatch(updateCourse(formData));
      setFormData({ id: 0, name: "", price: 0, duration: 0 });
      setCourseCount((prev) => prev + 1);
    }
  };

  const onAddItem = () => {
    setFormData({
      id: 0,
      name: "",
      price: 0,
      duration: 0,
    });
    setTypeSubmit("add");
    setOpen(true);
  };

  const onEditItem = (idx: number) => {
    const data = courses.data.find((item) => item.id === idx);
    if (data) {
      setTypeSubmit("edit");
      setOpen(true);
      setFormData(data);
    }
  };

  const onDeleteItem = async (id: number) => {
    await dispatch(deleteCourse(id));
    setCourseCount((prev) => prev + 1);
  };

  const onChangePage = async (value: number) => {
    await dispatch(setPageCourses(value));
  };
  return (
    <div className={styles.root}>
      <TopInfo name="Курсы" onClickAdd={onAddItem} />
      <TableCourses isLoading={isLoading} data={courses.data} onDelete={onDeleteItem} onEdit={onEditItem} />
      <BasicPagination onChangePage={onChangePage} currentPage={page} pageCount={courses.total} />
      <AddDrawer name="курсы" open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSubmitForm}>
          <TextInput name="name" label="Название" onChangeInput={handleInputChange} value={formData.name} />
          <NumberInput name="price" label="Стоимость" onChangeInput={handleInputChange} value={formData.price} />
          <NumberInput
            name="duration"
            label="Продолжительность"
            onChangeInput={handleInputChange}
            value={formData.duration}
          />
          <AddButton type="submit" />
        </form>
      </AddDrawer>
    </div>
  );
};

export default Courses;
