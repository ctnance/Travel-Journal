import React from "react";
import LocationIcon from "../images/location-icon.svg";

function Entry(props) {
  let data = props.data;
  return (
    <section className="entry-card">
      <div className="entry-card--location-img">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="entry-card--travel-details">
        <div>
          <img src={LocationIcon} alt="" />
          <span>
            {data.location} <a href={data.googleMapsUrl}>View on Google Maps</a>
          </span>
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
