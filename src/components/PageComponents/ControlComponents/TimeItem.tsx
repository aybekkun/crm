import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { createTime, deleteTime, fetchTime } from "../../../redux/time/asyncActions";
import AddComponent from "./AddComponent";
import TableControl from "./TableControl";

const TimeItem = () => {
  const dispatch = useAppDispatch();
  const { time, isLoading } = useSelector((state: RootState) => state.time);
  const [timeCount, setTimeCount] = React.useState<number>(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchTime({ cancelToken: cancelToken.token }));
    return () => {
      cancelToken.cancel();
    };
  }, [dispatch, timeCount]);

  const onCreateTime = async (value: string) => {
    await dispatch(createTime(value));
    setTimeCount((prev) => prev + 1);
  };

  const onDeleteTime = async (id: number) => {
    await dispatch(deleteTime(id));
    setTimeCount((prev) => prev + 1);
  };


  return (
    <div>
      <AddComponent onCreate={onCreateTime} isLoading={isLoading} name="Время" />
      <TableControl isLoading={isLoading} onDelete={onDeleteTime} data={time?.data} />
    </div>
  );
};

export default TimeItem