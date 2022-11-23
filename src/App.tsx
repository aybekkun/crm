import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Login from "./layouts/Login";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import { checkLogin } from "./redux/login/asyncActions";
import { RootState, useAppDispatch } from "./redux/store";
import ProtectedRoute from "./utils/ProtectedRoute";
const App = () => {
  const dispatch = useAppDispatch();
  const { isUserLogin } = useSelector((state: RootState) => state.login);
  const navigate = useNavigate();

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
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
