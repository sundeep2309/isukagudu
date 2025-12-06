import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./Testimonials.module.scss";

import testimonialImage1 from "../../assets/testimonials/testimonial-1.webp";
import testimonialImage2 from "../../assets/testimonials/testimonial-2.webp";
import testimonialImage3 from "../../assets/testimonials/testimonial-3.webp";
import testimonialImage4 from "../../assets/testimonials/testimonial-4.webp";

const Testimonials = () => {
  return (
    <section id="schedule" className={`${globalStyles.section} ${globalStyles.bgWhite}`}>
      <div className={globalStyles.container}>
        <div className={`${globalStyles.sectionContentWrapper} ${globalStyles.centerAligned}`}>
          <span className={globalStyles.sectionCaption}>What parents say about us</span>
          <h2 className={globalStyles.sectionTitle}>Testimonials</h2>
          <Swiper slidesPerView={1} modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className={styles.testimonials}>
            <SwiperSlide>
              <div className={styles.testimonial}>
                <div className={styles.testimonialImage}>
                  <img src={testimonialImage1} alt="Testimonial" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence. Our program focuses on logical puzzles, phonics, and creative activities.</p>
                  <h3>G. Chinnari Sruthi</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonial}>
                <div className={styles.testimonialImage}>
                  <img src={testimonialImage2} alt="Testimonial" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence. Our program focuses on logical puzzles, phonics, and creative activities.</p>
                  <h3>G. Chinnari Sruthi</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonial}>
                <div className={styles.testimonialImage}>
                  <img src={testimonialImage3} alt="Testimonial" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence. Our program focuses on logical puzzles, phonics, and creative activities.</p>
                  <h3>G. Chinnari Sruthi</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonial}>
                <div className={styles.testimonialImage}>
                  <img src={testimonialImage4} alt="Testimonial" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>Our program focuses on logical puzzles, phonics, and creative activities that strengthen thinking, language, and confidence. Our program focuses on logical puzzles, phonics, and creative activities.</p>
                  <h3>G. Chinnari Sruthi</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
