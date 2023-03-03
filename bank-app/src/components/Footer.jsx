import React from "react";
import styles from "../styles";
import { foooterlinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY}
    flex-col`}
    >
      <div
        className={`${styles.flexStart} md:flex-row
    flex-col mb-8 w-full`}
      >
        <img
          src={logo}
          alt="hoobanks"
          className="w-[266px] h-[72px] object-contain "
        />
      </div>
    </section>
  );
};

export default Footer;
