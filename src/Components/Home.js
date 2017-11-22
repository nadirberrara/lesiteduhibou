import React from "react";
import { Link } from "react-router-dom";
import ButtonBase from "material-ui/ButtonBase";
import Typography from "material-ui/Typography";

class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <h1>Home</h1>
        <Link to="/Hibou">
          <ButtonBase>
            <div className="imgContainer">
              <img
                className="hibou"
                src="https://www.harris73.com/medias/images/h73-imgweb054.jpg"
                alt=""
              />
              <Typography className="text">
                <div>HIBOU</div>
              </Typography>
            </div>
          </ButtonBase>
        </Link>
        <Link to="/Panda">
          <ButtonBase>
            <div className="imgContainer">
              <img
                className="panda"
                src="https://s3.eu-central-1.amazonaws.com/zooparc/assets/team_panda/yuanzi_300x300.jpg"
                alt=""
              />
              <Typography className="text">
                <div>PANDA</div>
              </Typography>
            </div>
          </ButtonBase>
        </Link>
      </div>
    );
  }
}

export default Home;
