import Paper from "@mui/material/Paper";
import DeleteButton from "../../components/Buttons/DeleteButton";
import EditButton from "../../components/Buttons/EditButton";
import PlusButton from "../../components/Buttons/PlusButton";
import { ITeacherOneData } from "../../redux/teachers/types";
import styles from "./DetailInfo.module.scss";

type DeatailInfoProps = {
  data: ITeacherOneData | null;
  onEdit: () => void;
  onDelete: () => void;
};

const DeatailInfo: React.FC<DeatailInfoProps> = ({ data, onEdit = () => undefined, onDelete = () => undefined }) => {
  return (
    <div className={styles.root}>
      <Paper className={styles.about}>
        <h2>Данные: </h2>
        <div className={styles.info}>
          <h3>Имя:</h3> <span>{data?.name}</span>
        </div>
        <div className={styles.info}>
          <h3>Фамилия:</h3> <span>{data?.surname}</span>
        </div>
        <div className={styles.info}>
          <h3>Телефон номер:</h3> <span>{data?.phone}</span>
        </div>
        <div className={styles.info}>
          <h3>Адрес:</h3> <span>{data?.address}</span>
        </div>
        <div className={styles.buttons}>
          <PlusButton color="success" />
          <EditButton onEdit={onEdit} />
          <DeleteButton color="error" onDelete={onDelete} />
        </div>
      </Paper>
    </div>
  );
};

export default DeatailInfo;
