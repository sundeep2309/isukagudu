import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./Schedule.module.scss";

import clockIcon from "../../assets/clock.svg";

const Schedule = () => {
  return (
    <section id="schedule" className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div className={`${globalStyles.sectionContentWrapper} ${globalStyles.centerAligned}`}>
          <span className={globalStyles.sectionCaption}>Our Timings</span>
          <h2 className={globalStyles.sectionTitle}>Schedule and tution</h2>
          <div className={styles.scheduleWrapper}>
            <div className={styles.scheduleCard}>
              <span className={styles.scheduleCardCaption}>01</span>
              <h3>Half Days</h3>
              <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence.</p>
              <div className={styles.scheduleCardTimings}>
                <span className={styles.clock}>
                  <img src={clockIcon} alt="Timings" />
                </span>
                09:00 AM - 12:30 PM
              </div>
            </div>
            <div className={styles.scheduleCard}>
              <span className={styles.scheduleCardCaption}>02</span>
              <h3>Full Days</h3>
              <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence.</p>
              <div className={styles.scheduleCardTimings}>
                <span className={styles.clock}>
                  <img src={clockIcon} alt="Timings" />
                </span>
                09:00 AM - 12:30 PM
              </div>
            </div>
            <div className={styles.scheduleCard}>
              <span className={styles.scheduleCardCaption}>03</span>
              <h3>Customized Plan</h3>
              <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence.</p>
              <div className={styles.scheduleCardTimings}>
                <span className={styles.clock}>
                  <img src={clockIcon} alt="Timings" />
                </span>
                09:00 AM - 12:30 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
