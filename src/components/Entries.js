import React from "react";
import Entry from "./Entry";
import data from "../data";

function Entries() {
  let entries = data.map((entry) => {
    return <Entry id={entry.id} data={entry} />;
  });
  console.log(data);
  return <div className="entries-container">{entries}</div>;
}

export default Entries;
