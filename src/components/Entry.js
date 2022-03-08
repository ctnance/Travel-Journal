import React from "react";
import LocationIcon from "../images/location-icon.svg";

function Entry(props) {
  let data = props.data;
  return (
    <section className="entry-card">
      <div className="entry-card--title-img-container">
        <img className="entry-card--title-img" src={data.imageUrl} alt={data.title} />
      </div>
      <div className="entry-card--travel-details">
        <div className="entry-card--location-row">
          <img className="entry-card--location-icon" src={LocationIcon} alt="" />
          <span className="entry-card--location">{data.location}</span>{" "}
          <a href={data.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="entry-card--title">{data.title}</h2>
        <p className="entry-card--travel-dates">
          {data.startDate} - {data.endDate}
        </p>
        <p className="entry-card--description">{data.description}</p>
      </div>
    </section>
  );
}

export default Entry;
