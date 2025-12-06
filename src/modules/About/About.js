import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./About.module.scss";

import AboutImg from "../../assets/about-image.jpg";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <section id="about" className={`${globalStyles.section} ${globalStyles.bgWhite}`}>
      <div className={globalStyles.container}>
        <div className={globalStyles.sectionWrapper}>
          <div className={globalStyles.sectionImageWrapper}>
            <img src={AboutImg} alt="Isukagudu Preschool" className={globalStyles.sectionImage} />
          </div>
          <div className={globalStyles.sectionContentWrapper}>
            <span className={globalStyles.sectionCaption}>What we are</span>
            <h2 className={globalStyles.sectionTitle}>About Isukagudu</h2>
            <p className={globalStyles.sectionContent}>At Isukagudu Preschool, children learn through hands-on play, exploration, and discovery. Outdoor play is a daily requirement, helping kids build teamwork, problem-solving, and curiosity in nature. Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence.</p>
            <Button
              label="Learn more about Isukagudu"
              onClick={() => {
                window.location.href = "#";
              }}
            />
          </div>
        </div>
      </div>
      <span className={styles.hasPlusIcon}></span>
    </section>
  );
};
export default About;
