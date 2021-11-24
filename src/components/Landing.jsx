import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./../assets/css/style.css";

const Landing = () => {
  const images = {
    hh2: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GalacticPeriwinkleHornsYellowB.png",
    hh3: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AmpersandBlue_B2B_h%26h.png",
    hh4: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DarkerBlue_h%26hF.png",
    hh5: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Cutesie_h_h_F.png",
    hh6: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AmpersandGrey_NoBg_h%26h.png",
    hh7: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/TransparentBannerCrop_h%26h.png",
    hh8: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DragonHeadColorNoBG_h%26h.png",
    hh9: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/DragonHeadColorNoBGFLIPPED_h%26h.png",
    hh10: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AmpersandRed_P3_h%26h.png",
    hh11: "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/SimpleGrey_NoBg_h%26h.png",
    banner:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksAdventurelandBannerNoBG3.png",
    purpleRainbowBG:
      "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/BGRainBowPurps.png",
  };
  const history = useHistory();

  const redirectToAmps = () => {
    history.push("/ampersands");
  };
  const redirectToBans = () => {
    history.push("/banners");
  };
  const redirectToGreys = () => {
    history.push("/greyscales");
  };

  return (
    <React.Fragment>
      <div>
        <div
          className="container"
          style={{
            paddingLeft: 250,
            paddingRight: 250,
            paddingbottom: 250,
            paddingTop: 100,
            backgroundImage: "url(" + images.purpleRainbowBG + ")",
          }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Grid item></Grid>
            <Grid item>
              <img className="landingBanner" src={images.banner}></img>
            </Grid>
            <Grid item></Grid>
            <Grid item>
              <img
                className="zoom"
                style={{ maxHeight: 175, maxWidth: 175 }}
                src={images.hh8}
                alt="Hazards and Hijinks"
              />
            </Grid>
            <Grid item onClick={redirectToBans}>
              <img
                title="Click for more Banners"
                className="zoom hoverHand logo"
                src={images.hh7}
                alt="Hazards and Hijinks"
              />
            </Grid>

            <Grid item>
              <img
                className="zoom"
                style={{ maxHeight: 175, maxWidth: 175 }}
                src={images.hh9}
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
                        maxHeight: 200,
                        maxWidth: 200,
                      }}
                      src={images.hh3}
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
                      src={images.hh4}
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
                      src={images.hh5}
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
                      src={images.hh10}
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
                alignItems="center"
                spacing={4}
              >
                <Grid item className="zoom">
                  <div className="card-box-hover-rise ">
                    <div className="box">
                      <img
                        style={{
                          height: "auto",
                          width: "auto",
                          maxHeight: 300,
                          maxWidth: 300,
                        }}
                        src={images.hh6}
                        alt="Hazards and Hijinks"
                      />
                      <div className="middle hoverHand">
                        <div className="text4" onClick={redirectToGreys}>
                          click me
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item className="zoom">
                  <a href="https://sunpopshop.com">
                    <div className="card-box-hover-rise ">
                      <div className="box">
                        <img
                          style={{
                            height: "auto",
                            width: "auto",
                            maxHeight: 250,
                            maxWidth: 250,
                          }}
                          src={images.hh2}
                          alt="Hazards and Hijinks"
                          className="roundCorners2"
                        />
                        <div className="middle hoverHand">
                          <div className="text6">
                            click to see more art by @sunpopshop
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Grid>
                <Grid item className="zoom">
                  <div className="card-box-hover-rise ">
                    <div className="box">
                      <img
                        style={{
                          height: "auto",
                          width: "auto",
                          maxHeight: 300,
                          maxWidth: 300,
                        }}
                        src={images.hh11}
                        alt="Hazards and Hijinks"
                      />
                      <div className="middle hoverHand">
                        <div className="text4" onClick={redirectToGreys}>
                          click me
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
