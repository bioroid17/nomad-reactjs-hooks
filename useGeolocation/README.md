# Description

React Hook to get your geolocation

## Usage

```js
import useGeolocation from "@brhooks/use-geolocation";

const App = () => {
  const {
    latitude,
    longitude,
    altitude,
    accuracy,
    altitudeAccuracy,
    heading,
    speed,
    msg,
  } = useGeolocation();
  return (
    <div className="App">
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Altitude: {altitude}</p>
      <p>Accuracy: {accuracy}</p>
      <p>Altitude Accuracy: {altitudeAccuracy}</p>
      <p>Heading: {heading}</p>
      <p>Speed: {speed}</p>
      <p>{msg}</p>
    </div>
  );
};
```
