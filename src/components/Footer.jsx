import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="body">
        Say hi! By{" "}
        <a
          className="bodyLink"
          target="_blank"
          href="mailto:just1arale@gmail.com?subject=Hello&body=Hi%20Arale!"
        >
          Email{" "}
        </a>
        or{" "}
        <a
          className="bodyLink"
          target="_blank"
          href="https://www.linkedin.com/in/s-kuechler-fullstack-dev/"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Footer;
