import React from "react";
import { Grid } from "@material-ui/core";
//import hh1 from ".src\assets\images\Simple_NoBg_h&h.png"
import hh1 from "./../assets/images/Simple_NoBg_h&h.png";
import hh2 from "./../assets/images/GalacticPeriwinkleHornsYellowB.png";
import hh3 from "./../assets/images/Texture6_GalaxyBlue_h&h.png";
import hh4 from "./../assets/images/TextureBanner7_h&h_colorWhite.png";
import hh5 from "./../assets/images/AmpersandPeri_NoBg_h&h.png";
import hh6 from "./../assets/images/AmpersandGrey_NoBg_h&h.png";
import hh7 from "./../assets/images/TransparentBannerCrop_h&h.png";
import hh8 from "./../assets/images/DragonHeadColorNoBG_h&h.png";
import hh9 from "./../assets/images/DragonHeadColorNoBGFLIPPED_h&h.png";
import hh10 from "./../assets/images/AmpersandRed_P3_h&h.png";
// import galaxy from "./../assets/images/Galaxy.png";
// import pink2 from "./../assets/images/pinkSprinkleFooter.png";
// import purple from "./../assets/images/PurpleGalaxyBackGround (1).png";
// import purpleVert from "./../assets/images/PurpleGalaxyBackGroundVert.png";
import purpleRainbowBG from "./../assets/images/BGRainBowPurps.png";
import "./../assets/css/style.css";

const Landing = () => {
  const hijinksDetails = {
    hh1,
    hh2,
    pink: "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/pink.png",
    purple:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/PurpleGalaxyBackGroundHorizontal.png",
  };

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
            //alignItems="flex end"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <img
                //className="roundCorners2 shadow"
                style={{ maxHeight: 400, maxWidth: 400 }}
                src={hh8}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item>
              <img
                // className="roundCorners2 shadow"
                style={{ maxHeight: 700, maxWidth: 900 }}
                src={hh7}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item>
              <img
                //className="roundCorners2 shadow"
                style={{ maxHeight: 400, maxWidth: 400, paddingRight: 40 }}
                src={hh9}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item>
              <img
                className="roundCorners2 shadow"
                style={{ maxHeight: 500, maxWidth: 500 }}
                src={hh2}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item>
              <img
                className="roundCorners2 shadow"
                style={{ maxHeight: 500, maxWidth: 500 }}
                src={hh6}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item>
              <img
                className="roundCorners2 shadow"
                style={{ maxHeight: 500, maxWidth: 500 }}
                src={hh10}
                alt="Hazards and Hijinks"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
