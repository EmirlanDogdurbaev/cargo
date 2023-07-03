import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Routing } from "react-leaflet-routing-machine";
import "leaflet/dist/leaflet.css";

const UserMap = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [start, setStart] = useState([null, null]);
  const [end, setEnd] = useState([null, null]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const AddStartMarker = () => {
    const map = useMap();

    const handleStartMarkerDragEnd = (event) => {
      if (event.target) {
        const { lat, lng } = event.target.getLatLng();
        setStart([lat, lng]);
      }
    };

    return (
      <Marker
        position={start}
        draggable={true}
        onDragEnd={handleStartMarkerDragEnd}
      />
    );
  };

  const AddEndMarker = () => {
    const map = useMap();

    const handleEndMarkerDragEnd = (event) => {
      if (event.target) {
        const { lat, lng } = event.target.getLatLng();
        setEnd([lat, lng]);
      }
    };

    return (
      <Marker
        position={end}
        draggable={true}
        onDragEnd={handleEndMarkerDragEnd}
      />
    );
  };

  return (
    <div>
      {latitude && longitude ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[latitude, longitude]} />
          <AddStartMarker />
          <AddEndMarker />
          {start[0] !== null && end[0] !== null && (
            <Routing waypoints={[{ latLng: start }, { latLng: end }]} />
          )}
        </MapContainer>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserMap;
