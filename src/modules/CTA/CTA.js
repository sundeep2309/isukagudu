import Button from "../../components/Button/Button";
import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <div className={styles.CTA}>
      <div className={globalStyles.container}>
        <div className={styles.CTABlock}>
          <h2>At Isukagudu, we believe, "Not All Classrooms Have 4 Walls"</h2>
          <Button
            label="Enroll your kid"
            onClick={() => {
              window.location.href = "#";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
