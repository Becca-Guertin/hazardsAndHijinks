import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import "./../assets/css/style.css";

const LandAmpTemp = (props) => {
  const redirectToAmps = () => {
    props.handleClick(props.amp);
  };
  return (
    <React.Fragment>
      <Grid item onClick={redirectToAmps}>
        <div className="card-box-hover-rise ">
          <div className="box ">
            <img
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 200,
                maxWidth: 200,
              }}
              src={props.amp.imgUrl}
              className="image roundCorners2 shadow"
              alt="Hazards and Hijinks"
            ></img>

            <div className="middle hoverHand">
              <h3
                style={{ fontFamily: "Brush Script MT" }}
                className="text-black"
              >
                Check Out More!
              </h3>
            </div>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};

LandAmpTemp.propTypes = {
  amp: PropTypes.shape({
    imgUrl: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

export default LandAmpTemp;
