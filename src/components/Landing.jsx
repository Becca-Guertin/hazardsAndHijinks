import React from "react";
import { Grid } from "@material-ui/core";
import hh1 from "./../assets/images/Simple_NoBg_h&h.png";
import hh2 from "./../assets/images/GalacticPeriwinkleHornsYellowB.png";
import hh3 from "./../assets/images/AmpersandBlue_B2B_h&h.png";
import hh4 from "./../assets/images/DarkerBlue_h&hF.png";
import hh5 from "./../assets/images/Cutesie_h_h_F.png";
import hh6 from "./../assets/images/AmpersandGrey_NoBg_h&h.png";
import hh7 from "./../assets/images/TransparentBannerCrop_h&h.png";
import hh8 from "./../assets/images/DragonHeadColorNoBG_h&h.png";
import hh9 from "./../assets/images/DragonHeadColorNoBGFLIPPED_h&h.png";
import hh10 from "./../assets/images/AmpersandRed_P3_h&h.png";
import hh11 from "./../assets/images/SimpleGrey_NoBg_h&h.png";
import purpleRainbowBG from "./../assets/images/BGRainBowPurps.png";
import { useHistory } from "react-router-dom";
import "./../assets/css/style.css";

const Landing = () => {
  const history = useHistory();
  const hijinksDetails = {
    hh1,
    hh2,
    pink: "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/pink.png",
    purple:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/PurpleGalaxyBackGroundHorizontal.png",
  };

  const redirectToAmps = () => {
    history.push("/Ampersands");
  };
  const redirectToBans = () => {
    history.push("/Banners");
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
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <img
                className="zoom"
                style={{ maxHeight: 200, maxWidth: 200 }}
                src={hh8}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item onClick={redirectToBans}>
              <img
                className="zoom hoverHand"
                style={{ maxHeight: 600, maxWidth: 800 }}
                src={hh7}
                alt="Hazards and Hijinks"
              />
            </Grid>

            <Grid item>
              <img
                className="zoom"
                style={{ maxHeight: 200, maxWidth: 200 }}
                src={hh9}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid container justifyContent="center" direction="row" spacing={4}>
              <Grid item onClick={redirectToAmps}>
                <div className="card-box-hover-rise ">
                  <div className="box ">
                    <img
                      style={{
                        height: "auto",
                        width: "auto",
                        maxHeight: 300,
                        maxWidth: 300,
                      }}
                      src={hh3}
                      className="image roundCorners2 shadow"
                      alt="Hazards and Hijinks"
                    ></img>
                    <h3
                      style={{ fontFamily: "Brush Script MT" }}
                      className="text-black"
                    ></h3>
                    <div className="middle hoverHand">
                      <div className="text">Check Out More!</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="card-box-hover-rise ">
                  <div className="box ">
                    <img
                      style={{
                        height: "auto",
                        width: "auto",
                        maxHeight: 300,
                        maxWidth: 300,
                      }}
                      src={hh4}
                      className="image roundCorners2 shadow"
                      alt="Hazards and Hijinks"
                    ></img>
                    <h3
                      style={{ fontFamily: "Brush Script MT" }}
                      className="text-black"
                    ></h3>
                    <div className="middle hoverHand">
                      <div className="text">Check Out More!</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="card-box-hover-rise ">
                  <div className="box ">
                    <img
                      style={{
                        height: "auto",
                        width: "auto",
                        maxHeight: 300,
                        maxWidth: 300,
                      }}
                      src={hh5}
                      className="image roundCorners2 shadow"
                      alt="Hazards and Hijinks"
                    ></img>
                    <h3
                      style={{ fontFamily: "Brush Script MT" }}
                      className="text-black"
                    ></h3>
                    <div className="middle hoverHand">
                      <div className="text">Check Out More!</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="card-box-hover-rise ">
                  <div className="box ">
                    <img
                      style={{
                        height: "auto",
                        width: "auto",
                        maxHeight: 300,
                        maxWidth: 300,
                      }}
                      src={hh10}
                      className="image roundCorners2 shadow"
                      alt="Hazards and Hijinks"
                    ></img>
                    <h3
                      style={{ fontFamily: "Brush Script MT" }}
                      className="text-black"
                    ></h3>
                    <div className="middle hoverHand">
                      <div className="text">Check Out More!</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={4}
              >
                <Grid item>
                  <img
                    className="zoom"
                    style={{ maxHeight: 400, maxWidth: 400 }}
                    src={hh6}
                    alt="Hazards and Hijinks"
                  />
                </Grid>
                <Grid item className="zoom">
                  <div className="card-box-hover-rise ">
                    <div className="box">
                      <img
                        //className="zoom"
                        style={{ maxHeight: 500, maxWidth: 500 }}
                        src={hh11}
                        alt="Hazards and Hijinks"
                      />
                      <div className="middle hoverHand">
                        <div className="text4">click me</div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
