import React from "react";
import "../App.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          Vous êtes sur un site, cliquez *<a
            href="https://www.deezer.com/fr/artist/1560"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ici{" "}
          </a>
          * pour écouter du Jacques Brel
        </p>
        <p />
      </div>
    );
  }
}

export default Footer;
