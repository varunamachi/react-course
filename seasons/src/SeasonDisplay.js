import React from "react";
import "./SeasonDisplay.css";

class SeasonDisplay extends React.Component {
  seasonConfig = {
    summer: {
      text: "Let's hit the beach",
      iconName: "sun",
    },
    winter: {
      text: "Burr it's cold",
      iconName: "snowflake",
    },
  };

  render() {
    const season = this.getSeason(this.props.lat, new Date().month);
    const { text, iconName } = this.seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`} />
        <h1 className="text">{text}</h1>
        <i className={`icon-right ${iconName} icon massive`} />
      </div>
    );
  }

  getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    }
    return lat > 0 ? "winter" : "summer";
  };
}

export default SeasonDisplay;
