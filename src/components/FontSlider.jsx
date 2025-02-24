import React from "react";
import { useEffect, useState } from "react";
import "./../assets/css/style.css";

const FontSlider = () => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const images = [
"https://shttps://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/Ampersand_h%26hFont_purple.pngunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/%40_h_hFont_blue.png",
"https://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/Ampersand_h%26hFont_purple.png",
"https://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/Dollar_h%26hFont_blue.png",
"https://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/Exclamation_h_hFont_purple.png",
"https://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/Pound_h_hFont_blue.png",
"https://sunpopbucket.s3.us-west-1.amazonaws.com/images/HazardsHijinksFont/specialChars/Question_h_hFont_purple.png"
  ];

  return (
    <img
      className="zoom"
      src={images[index]}
      alt=""
      style={{
        maxHeight: 300,
        maxWidth: "auto",
        marginBottom: 40,
      }}
    />
  );
};

export default FontSlider;
