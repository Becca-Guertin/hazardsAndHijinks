import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
// import hh3 from "./../assets/images/AmpersandBlue_B2B_h&h.png";
// import hh4 from "./../assets/images/DarkerBlue_h&hF.png";
// import hh5 from "./../assets/images/Cutesie_h_h_F.png";
// import hh10 from "./../assets/images/AmpersandRed_P3_h&h.png";
// import logo from "./../assets/images/DragonHeadColorNoBG_h&h.png";
// import purpleRainbowBG from "./../assets/images/BGRainBowPurps.png";
import "./../assets/css/style.css";

const Ampersands = () => {
  const images = {
    hh3: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AmpersandBlue_B2B_h%26h.png",
    hh4: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DarkerBlue_h%26hF.png",
    hh5: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Cutesie_h_h_F.png",
    hh10: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AmpersandRed_P3_h%26h.png",
    logo: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DragonHeadColorNoBG_h%26h_NoRainbow.png",
    purpleRainbowBG:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/BGRainBowPurps.png",
  };

  return (
    <React.Fragment>
      <div>
        <div
          className="container"
          style={{
            padding: 100,
            backgroundImage: "url(" + images.purpleRainbowBG + ")",
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
                    src={images.logo}
                    style={{
                      height: 150,
                      width: 150,
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
                src={images.hh3}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt="Hazards and Hijinks Ampersand V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={images.hh4}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt="Hazards and Hijinks Ampersand V2"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={images.hh5}
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
