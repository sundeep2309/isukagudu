import Button from "../../components/Button/Button";
import globalStyles from "./../../styles/globalStyles.module.scss";
import styles from "./WhyUs.module.scss";

import whyUsImage from "../../assets/kids-2.png";

const WhyUs = () => {
  return (
    <section id="whyUs" className={`${globalStyles.section} ${globalStyles.bgWhite}`}>
      <div className={globalStyles.container}>
        <div className={globalStyles.sectionWrapper}>
          <div className={globalStyles.sectionContentWrapper}>
            <span className={globalStyles.sectionCaption}>Why us</span>
            <h2 className={globalStyles.sectionTitle}>The best early learning experience</h2>
            <p className={globalStyles.sectionContent}>At Isukagudu Preschool, children learn through hands-on play, exploration, and discovery. Outdoor play is a daily requirement, helping kids build teamwork, problem-solving, and curiosity in nature. Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence.</p>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>CCTV Surveillance</li>
              <li className={styles.serviceItem}>Play based Education</li>
              <li className={styles.serviceItem}>Nature based Learning</li>
              <li className={styles.serviceItem}>Trained Teachers</li>
              <li className={styles.serviceItem}>Play Group</li>
            </ul>
            <Button
              label="Contact Us"
              onClick={() => {
                window.location.href = "#";
              }}
            />
          </div>
          <div className={globalStyles.sectionImageWrapper}>
            <img src={whyUsImage} alt="Isukagudu Preschool" className={globalStyles.sectionImage} />
          </div>
        </div>
      </div>
      <span className={styles.hasPlusIcon}></span>
    </section>
  );
};

export default WhyUs;
