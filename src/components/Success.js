import React from "react";
import kisses from "../kisses.gif";
import usImage from "../us.jpeg";
import { ReactComponent as CustomIcon } from "../breasts-yellow.svg";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      You're my favorite person and I enjoy every moment we spend together.
    </p>
    <p className="App-text-success">
      Shaki (My Pineapple 🍍), Looking forward to spending Valentine's Day with you and sucking your Boobies
    </p>
    <p><CustomIcon /></p>
    <img src={usImage} alt= "Us Together" style={{ width: "500px", height: "auto" }} />
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">20/01/2024</p>
  </div>
);

export default Success;
