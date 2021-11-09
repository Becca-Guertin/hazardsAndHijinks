import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// import banner1 from "./../assets/images/Texture6_Transparent_h&h.png";
// import banner3 from "./../assets/images/Texture4_Transparent_h&h.png";
// import banner2 from "./../assets/images/TextureBanner7_h&h_colorWhite.png";
// import banner4 from "./../assets/images/Texture6_GalaxyPink_h&h.png";
// import banner5 from "./../assets/images/Texture6_BlueA_h&h.png";
//import logo from "./../assets/images/DragonHeadColorNoBG_h&h.png";
//import purpleRainbowBG from "./../assets/images/BGRainBowPurps.png";
import "./../assets/css/style.css";

const Banners = () => {
  const banners = {
    banner5:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Texture6_BlueA_h%26h.png",
    banner4:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Texture6_GalaxyPink_h%26h.png",
    banner2:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/TextureBanner7_h%26h_colorWhite.png",
  };

  const images = {
    logo: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DragonHeadColorNoBG_h%26h_NoRainbow.png",
    logo2:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Back_dragon_h2site.png",
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
            <Grid item xs={6} >
              <Link   to="/" title="Back to Home">
                <i className="bg-white">
                  <img
                   className="logo2"
                    alt="SunPopShop"
                    src={images.logo2}
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
                src={banners.banner4}
                style={{ maxHeight: 300, maxWidth: 400 }}
                alt="Hazards and Hijinks Banner V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={banners.banner2}
                style={{ maxHeight: 300, maxWidth: 400 }}
                alt="Hazards and Hijinks Banner V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={banners.banner5}
                style={{ maxHeight: 300, maxWidth: 400 }}
                alt="Hazards and Hijinks Banner V1"
              ></img>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banners;
