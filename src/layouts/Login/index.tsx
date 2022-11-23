import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../redux/login/asyncActions";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./Login.module.scss";

type FormValues = {
  phone: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      phone: "+998",
      password: "",
    },
    mode: "onChange",
  });
  const dispatch = useAppDispatch();
  const { isUserLogin } = useSelector((state: RootState) => state.login);
  const navigate = useNavigate();
  let location = useLocation();
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    dispatch(fetchLogin(values));
  };

  if (isUserLogin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <div className={styles.root}>
      <Paper className={styles.sign}>
        <h2>Perfect School</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Войти в систему</h3>
          <TextField
            type="tel"
            className={styles.input}
            placeholder="+998913809626"
            label="Account"
            variant="outlined"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
            {...register("phone", { required: "Укажите номер", maxLength: 13 })}
          />
          <TextField
            type="password"
            className={styles.input}
            placeholder="Password"
            label="Password"
            variant="outlined"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register("password", { required: "Укажите пароль" })}
          />
          <Button disabled={!isValid} type="submit" variant="contained">
            Войти
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
