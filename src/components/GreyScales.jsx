import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./../assets/css/style.css";

const GreyScales = () => {
  const images = {
    hh3: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AmpersandGrey_NoBg_h%26h.png",
    hh4: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GreyscaleBannerNoBG_h%26h.png",
    hh5: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/SimpleGrey_NoBg_h%26h.png",
    hh6: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GreyscaleBanner2galaxy_h%26h2.png",
    hh7: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GreyscaleBanner2_h%26h.png",
    hh8: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GreyscaleBanner2NoBG_h%26h2.png",
    hh9: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GreyscaleBanner_h%26h.png",
    // logo: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DragonHeadColorNoBG_h%26h_NoRainbow.png",
    logo: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Back_dragon_h2site.png",
    purpleRainbowBG:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/BGRainBowPurps.png",
    blueCloudRnBowBG:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/CloudRainbowBG8.5x11.png",
  };

  return (
    <React.Fragment>
      <div>
        <div
          className="container"
          style={{
            paddingLeft: 250,
            paddingRight: 250,
            paddingTop: 100,
            paddingBottom: 200,
            backgroundImage: "url(" + images.blueCloudRnBowBG + ")",
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
                    className="logo2"
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
                alt="Hazards and Hijinks Greysale V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={images.hh8}
                style={{ maxHeight: 400, maxWidth: 500 }}
                alt="Hazards and Hijinks Greysale V2"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={images.hh5}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt="Hazards and Hijinks Greysale V3"
              ></img>
            </Grid>
            <Grid container direction="row" spacing={4} justifyContent="center">
              <Grid item>
                <img
                  className="zoom roundCorners2"
                  src={images.hh7}
                  style={{ maxHeight: 400, maxWidth: 500 }}
                ></img>
              </Grid>
              <Grid item>
                <img
                  className="zoom roundCorners2"
                  src={images.hh6}
                  style={{ maxHeight: 400, maxWidth: 500 }}
                ></img>
              </Grid>
              <Grid item>
                <img
                  className="zoom roundCorners2"
                  src={images.hh9}
                  style={{ maxHeight: 400, maxWidth: 500 }}
                ></img>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" spacing={4}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <img
                  src={images.hh4}
                  className="zoom roundCorners2"
                  style={{ maxHeight: 600, maxWidth: 700 }}
                ></img>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GreyScales;
