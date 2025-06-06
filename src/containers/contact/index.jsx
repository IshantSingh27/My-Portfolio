import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Connect</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__content__info">
            <p><strong>Email:</strong> ishantsingh@example.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ishant-singh-a7b2a3298/" target="_blank" rel="noreferrer">linkedin.com/in/ishantsingh</a></p>
            <div className="social-icons">
              <a href="https://www.instagram.com/ishant.is_singh/" target="_blank" rel="noreferrer">
                <FaInstagram size={40} />
              </a>
              <a href="https://x.com/IshantSingh_27" target="_blank" rel="noreferrer">
                <FaTwitter size={40} />
              </a>
              <a href="https://www.linkedin.com/in/ishant-singh-a7b2a3298/" target="_blank" rel="noreferrer">
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
