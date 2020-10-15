import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "../Style/Carte.css";
import { showDataOnMap } from "../utils";

function Carte({ countries, casesType, center, zoom }) {
  return (
    <div className="carte">
      <Map center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </Map>
    </div>
  );
}

export default Carte;
