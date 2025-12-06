import React from "react";
import globalStyles from "./../../styles/globalStyles.module.scss";
import styles from "./HeroSection.module.scss";
import Button from "../../components/Button/Button";

const HeroSection = () => {
  return (
    <div className={`${globalStyles.section} ${styles.heroSection}`}>
      <div className={globalStyles.container}>
        <div className={styles.heroSectionWrapper}>
          <div className={styles.heroSectionContentWrapper}>
            <span className={styles.heroSectionCaption}>Activity based ~ Learning oriented</span>
            <h1 className={styles.heroTitle}>
              A unique play based preschool designed and developed by <span className={styles.highlight}>Dr. Deepthi Raju</span>, a pediatrician, Montessori trained teacher and a special educator.
            </h1>
            <p className={styles.heroSectionContent}>We are a preschool committed to providing special attention to every child, equally nurturing their emotional, physical, and intellectual growth.</p>
            <Button label={"Enroll your child"} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
