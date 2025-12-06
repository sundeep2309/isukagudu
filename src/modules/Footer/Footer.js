import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./Footer.module.scss";

import logo from "../../assets/logo-v2.png";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import youtubeIcon from "../../assets/youtube.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className={globalStyles.container}>
        <div className={styles.footer}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="Isukagudu" />
          </div>
          <div className={styles.footerLinks}>
            <a href="javascript:void(0)">Home</a>
            <a href="javascript:void(0)">About</a>
            <a href="javascript:void(0)">Gallery</a>
            <a href="javascript:void(0)">Contact</a>
          </div>
          <div className={styles.socialMediaLinks}>
            <a href="javascript:void(0)">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="javascript:void(0)">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="javascript:void(0)">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className={styles.copyrights}>
          <p>&copy; {currentYear} copyrights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
