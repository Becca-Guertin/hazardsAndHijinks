import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import hh3 from "./../assets/images/AmpersandBlue_B2B_h&h.png";
import hh4 from "./../assets/images/DarkerBlue_h&hF.png";
import hh5 from "./../assets/images/Cutesie_h_h_F.png";
import hh10 from "./../assets/images/AmpersandRed_P3_h&h.png";
import logo from "./../assets/images/DragonHeadColorNoBG_h&h.png";
import purpleRainbowBG from "./../assets/images/BGRainBowPurps.png";
import "./../assets/css/style.css";

const Ampersands = () => {
  return (
    <React.Fragment>
      <div>
        <div
          className="container"
          style={{
            padding: 100,
            backgroundImage: "url(" + purpleRainbowBG + ")",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item></Grid>
            <Grid item xs={6}>
              <Link to="/" title="Back to Home">
                <i className="bg-white">
                  <img
                    alt="SunPopShop"
                    src={logo}
                    style={{
                      height: 100,
                      width: 100,
                      justifyContent: "center",
                    }}
                  />
                </i>
              </Link>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={hh3}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt="Hazards and Hijinks Ampersand V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={hh4}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt="Hazards and Hijinks Ampersand V2"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={hh5}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt="Hazards and Hijinks Ampersand V3"
              ></img>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ampersands;
