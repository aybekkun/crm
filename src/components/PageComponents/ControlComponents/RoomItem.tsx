import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { createRoom, deleteRoom, fetchRooms } from "../../../redux/rooms/asyncActions";
import { RootState, useAppDispatch } from "../../../redux/store";
import AddComponent from "./AddComponent";
import TableControl from "./TableControl";

const RoomItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rooms, isLoading } = useSelector((state: RootState) => state.rooms);
  const [roomCount, setRoomCount] = React.useState<number>(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchRooms({ cancelToken: cancelToken.token }));
    return () => {
      cancelToken.cancel();
    };
  }, [dispatch, roomCount]);

  const onCreateRoom = async (value: string) => {
    await dispatch(createRoom(value));
    setRoomCount((prev) => prev + 1);
  };

  const onDeleteRoom = async (id: number) => {
    await dispatch(deleteRoom(id));
    setRoomCount((prev) => prev + 1);
  };

  return (
    <div>
      <AddComponent onCreate={onCreateRoom} isLoading={isLoading} name="Кабинет" />
      <TableControl isLoading={isLoading} onDelete={onDeleteRoom} data={rooms?.data} />
    </div>
  );
};

export default RoomItem;
