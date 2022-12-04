import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AboutGroup from "../../components/AboutGroup";
import JournalTabs from "../../components/PageComponents/JournalComponents/JournalTabs";
import TopInfoPersonal from "../../components/TopInfoPersonal";
import { fetchOneGroup } from "../../redux/groups/asyncActions";
import { setCurrentMonth } from "../../redux/groups/slice";
import { RootState, useAppDispatch } from "../../redux/store";

const GroupsInfo = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { group, currentMonth, isLoading } = useSelector((state: RootState) => state.groups);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async () => {
      await dispatch(
        fetchOneGroup({
          id,
          month: currentMonth ? currentMonth : null,
          cancelToken: cancelToken.token,
        })
      );
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [dispatch, id]);

  const onChangeTabs = (key: number) => {
    dispatch(setCurrentMonth(key));
  };

  return (
    <div>
      <TopInfoPersonal name="Группа" />
      <AboutGroup data={group} />
      <JournalTabs data={group.months} onChange={onChangeTabs}/>
      
    </div>
  );
};

export default GroupsInfo;
