import React from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul className="navbar">
            <ol>
              <Link to="/">
                <Button color="primary">Home</Button>
              </Link>
            </ol>
            <ol>
              <Link to="/hibou">
                <Button color="primary">Hibou</Button>
              </Link>
            </ol>
            <ol>
              <Link to="/panda">
                <Button color="primary">Panda</Button>
              </Link>
            </ol>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
