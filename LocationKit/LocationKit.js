import React from "react";
import "./assets/kitStyle.css";
import { browserName, browserVersion } from "react-device-detect";
import AppleLogo from "./assets/Apple.svg";
import GoogleLogo from "./assets/Google.svg";

function LocationKit({ AppleMapsLink, GoogleMapsLink }) {
  console.log("This website is using the LocationKit.");
  if (`${browserName}` === "Safari") {
    return (
      <section id="AppleMapsKit" className="kitStyle">
        <a href={AppleMapsLink} target="_blank">
          <img src={AppleLogo} />
          <p>Apple Maps</p>
        </a>
      </section>
    );
  } else {
    return (
      <section id="GoogleMapsKit" className="kitStyle">
        <a href={GoogleMapsLink} target="_blank">
          <img src={GoogleLogo} />
          <p>Google Maps</p>
        </a>
      </section>
    );
  }
}

export default LocationKit;
