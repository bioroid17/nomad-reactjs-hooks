import { useState } from "react";

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [altitudeAccuracy, setAltitudeAccuracy] = useState(null);
  const [heading, setHeading] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [msg, setMsg] = useState("Getting location...");
  if (!navigator.geolocation) {
    setMsg("Geolocation is not supported by your browser");
  } else {
    const onGeoSuccess = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setAltitude(position.coords.altitude);
      setAccuracy(position.coords.accuracy);
      setAltitudeAccuracy(position.coords.altitudeAccuracy);
      setHeading(position.coords.heading);
      setSpeed(position.coords.speed);
      setMsg("Location retrieved successfully.");
    };
    const onGeoError = (error) => {
      setMsg(`Error retrieving location: ${error.message}`);
    };

    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  }

  return {
    latitude,
    longitude,
    altitude,
    accuracy,
    altitudeAccuracy,
    heading,
    speed,
    msg,
  };
};
