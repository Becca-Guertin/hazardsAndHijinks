import React from "react";
import { Grid } from "@material-ui/core";
import purpleRainbowBG from "./../assets/images/BGRainBowPurps.png";
import banner1 from "./../assets/images/Texture6_Transparent_h&h.png";
import banner3 from "./../assets/images/Texture4_Transparent_h&h.png";
import banner2 from "./../assets/images/TextureBanner7_h&h_colorWhite.png"
import banner4 from "./../assets/images/Texture6_GalaxyPink_h&h.png";
import banner5 from "./../assets/images/Texture6_BlueA_h&h.png";
import "./../assets/css/style.css";

const Banners = () => {
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
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={banner4}
                style={{ maxHeight: 300, maxWidth: 400 }}
                alt="Hazards and Hijinks Banner V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={banner2}
                style={{ maxHeight: 300, maxWidth: 400 }}
                alt="Hazards and Hijinks Banner V1"
              ></img>
            </Grid>
            <Grid item>
              <img
                className="zoom roundCorners2"
                src={banner5}
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
