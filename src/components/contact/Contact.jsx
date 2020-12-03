import React from "react";
import "../contact/contact.css";
import { Icon } from "@iconify/react";
import gmailIcon from "@iconify/icons-mdi/gmail";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubFill from "@iconify/icons-ri/github-fill";
import cellphoneIphone from "@iconify/icons-mdi/cellphone-iphone";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>CONTACTO</h2>
      <div className="network-container">
        <Icon icon={gmailIcon} />
        <Icon icon={linkedinIcon} />
        <Icon icon={githubFill} />
        <Icon icon={cellphoneIphone} />
      </div>
    </div>
  );
};

export default Contact;
