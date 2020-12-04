import React from "react";
import "../contact/contact.css";
import { Icon } from "@iconify/react";
import gmailIcon from "@iconify/icons-mdi/gmail";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubFill from "@iconify/icons-ri/github-fill";
import cellphoneIphone from "@iconify/icons-mdi/cellphone-iphone";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Contact extends React.Component {
  state = { value: "", copied: false };

  copyEmailToClipboard = () => {
    let textField = document.createElement("textarea");
    textField.innerText = "geraldinevillacuraruz@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    this.setState({
      copied: true,
    });
  };

  copyPhoneToClipboard = () => {
    let textField = document.createElement("textarea");
    textField.innerText = "+56995789413";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    this.setState({
      copied: true,
    });
  };

  closeSpan = () => {
    this.setState({
      copied: false,
    });
  };

  render() {
    return (
      <div className="contact-container" id="contacto">
        <h2>CONTACTO</h2>
        <div className="network-container">
          <Icon
            icon={gmailIcon}
            onClick={this.copyEmailToClipboard}
            onMouseLeave={this.closeSpan}
          />

          <a
            target="blank"
            href="https://www.linkedin.com/in/geraldine-villacura/"
          >
            <Icon icon={linkedinIcon} />
          </a>
          <a target="blank" href="https://github.com/gvillacura">
            <Icon icon={githubFill} />
          </a>
          <Icon
            icon={cellphoneIphone}
            onClick={this.copyPhoneToClipboard}
            onMouseLeave={this.closeSpan}
          />
        </div>

        <div className="spanContainer">
          {this.state.copied ? <span>¡Copiado en portapapeles!</span> : null}
        </div>
      </div>
    );
  }
}

export default Contact;
