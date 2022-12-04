import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { IOneGroupData } from "../../redux/groups/types";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import PlusButton from "../Buttons/PlusButton";
import styles from "./AboutGroup.module.scss";

type AboutGroupProps = {
  data?: IOneGroupData | null | undefined;
  onEdit?: () => void;
  onDelete?: () => void;
};

const AboutGroup: React.FC<AboutGroupProps> = ({ data, onEdit = () => undefined, onDelete = () => undefined }) => {
  return (
    <div className={styles.root}>
      <Paper className={styles.about}>
        <h2>Информация о группе: </h2>
        <div className={styles.info}>
          <h3>Название группы:</h3> <span>{data?.group_name}</span>
        </div>
        <div className={styles.info}>
          <h3>Название курса:</h3> <span>{data?.course_name}</span>
        </div>
        <div className={styles.info}>
          <h3>Кабинет:</h3> <span>{data?.room_name}</span>
        </div>
        <div className={styles.info}>
          <h3>Учитель:</h3> <span>{data?.teacher_name}</span>
        </div>
        <div className={styles.buttons}>
          <PlusButton color="success" />
          <EditButton onEdit={onEdit} />
          <DeleteButton color="error" onDelete={onDelete} />
        </div>
      </Paper>
      <Paper className={styles.date}>
        <h2>Время: </h2>
        <div className={styles.info}>
          <h3>Начало дата курса:</h3> <span>{dayjs(data?.start_lesson).format("DD-MM-YYYY")}</span>
        </div>
        <div className={styles.info}>
          <h3>Конец дата курса:</h3> <span>{dayjs(data?.end_lesson).format("DD-MM-YYYY")}</span>
        </div>
        <div className={styles.info}>
          <h3>Начало:</h3> <span>{data?.start_time}</span>
        </div>
        <div className={styles.info}>
          <h3>Конец:</h3> <span>{data?.end_time}</span>
        </div>
      </Paper>
    </div>
  );
};

export default AboutGroup;
