import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { ITeacherGroups } from "../../redux/teachers/types";
import styles from "./DetailGroup.module.scss";

type DeatailGroupsProps = {
  data: ITeacherGroups[] | null | undefined;
};

const DeatailGroups: React.FC<DeatailGroupsProps> = ({ data }) => {
  return (
    <div className={styles.root}>
      <Paper className={styles.about}>
        <h2>Группы: </h2>
        {data ? (
          data.map((item) => (
            <Link key={item.id} to={`/groups/${item.id}`}>
              <div className={styles.info}>{item.name}</div>
            </Link>
          ))
        ) : (
          <p>Нет групп</p>
        )}
      </Paper>
    </div>
  );
};

export default DeatailGroups;
