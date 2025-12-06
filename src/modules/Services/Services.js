import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section id="services" className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div className={`${globalStyles.sectionContentWrapper} ${globalStyles.centerAligned}`}>
          <span className={globalStyles.sectionCaption}>What we provide</span>
          <h2 className={globalStyles.sectionTitle}>Services we offer</h2>
        </div>
        <div className={styles.servicesWrapper}>
          <div className={styles.serviceCard}>
            <h3>Service Title</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Service Title</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Service Title</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Service Title</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Service Title</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
          </div>
        </div>
      </div>
      <span className={styles.servicesBGIcon}></span>
    </section>
  );
};

export default Services;
