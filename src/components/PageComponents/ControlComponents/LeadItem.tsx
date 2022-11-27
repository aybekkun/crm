import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { createLead, deleteLead, fetchLead } from "../../../redux/lead/asyncActions";
import { RootState, useAppDispatch } from "../../../redux/store";
import AddComponent from "./AddComponent";
import TableControl from "./TableControl";

const LeadItem:React.FC = () => {
  const dispatch = useAppDispatch();
  const { lead, isLoading } = useSelector((state: RootState) => state.lead);
  const [leadCount, setLeadCount] = React.useState<number>(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchLead({ cancelToken: cancelToken.token }));
    return () => {
      cancelToken.cancel();
    };
  }, [dispatch, leadCount]);

  const onCreateLead = async (value: string) => {
    await dispatch(createLead(value));
    setLeadCount((prev) => prev + 1);
  };

  const onDeleteLead = async (id: number) => {
    await dispatch(deleteLead(id));
    setLeadCount((prev) => prev + 1);
  };

  return (
    <div>
      <AddComponent onCreate={onCreateLead} isLoading={isLoading} name="Источник" />
      <TableControl isLoading={isLoading} onDelete={onDeleteLead} data={lead?.data} />
    </div>
  );
};
export default LeadItem