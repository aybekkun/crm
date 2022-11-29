import React from "react";
import { setResetFormCourses } from "../redux/courses/slice";

export default function useForm<T>(initialValue: T) {
  const [formData, setFormData] = React.useState<T>(initialValue);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData(initialValue);
  };
  return { formData, setFormData, handleInputChange, resetForm };
}
