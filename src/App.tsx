import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./layouts/Login";
import MainLayout from "./layouts/MainLayout";
import Control from "./pages/Control";
import Courses from "./pages/Courses";
import Employees from "./pages/Employees";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import NotFound from "./pages/NotFound";
import Payments from "./pages/Payments";
import Statistics from "./pages/Statistics";
import Groups from "./pages/Groups";
import { checkLogin } from "./redux/login/asyncActions";
import { RootState, useAppDispatch } from "./redux/store";
import ProtectedRoute from "./utils/ProtectedRoute";
import Wait from "./pages/Wait";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
const App = () => {
  const dispatch = useAppDispatch();
  const { isUserLogin } = useSelector((state: RootState) => state.login);

  React.useEffect(() => {
    async function fetchCheckLogin() {
      await dispatch(checkLogin());
    }
    fetchCheckLogin();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          {/* Меню 1 */}
          <Route path="/wait" element={<Wait />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          {/* Меню 2 */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/lessons" element={<Lessons />} />
          {/* Финанс */}
          <Route path="/payments" element={<Payments />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* Настройки */}
          <Route path="/employees" element={<Employees />} />
          <Route path="/control" element={<Control />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
