import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Routing } from "react-leaflet-routing-machine";
import "leaflet/dist/leaflet.css";

const MapWithRoute = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setStart([latitude, longitude]);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const AddMarker = ({ position, draggable, onDragEnd }) => (
    <Marker position={position} draggable={draggable} onDragend={onDragEnd} />
  );

  const DrawRoute = () => {
    const map = useMap();

    useEffect(() => {
      if (start && end) {
        map.fitBounds([start, end]);
      }
    }, [map, start, end]);

    return (
      <>
        {start && <Marker position={start} />}
        {end && <Marker position={end} />}
        {start && end && (
          <Routing
            waypoints={[start, end]}
            routeWhileDragging={true}
            addWaypoints={false}
            lineOptions={{ styles: [{ color: "#3388ff", weight: 6 }] }}
          />
        )}
      </>
    );
  };

  const handleStartMarkerDragEnd = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setStart([lat, lng]);
  };

  const handleEndMarkerDragEnd = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setEnd([lat, lng]);
  };

  return (
    <div>
      {start ? (
        <MapContainer center={start} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <AddMarker position={start} draggable={true} onDragEnd={handleStartMarkerDragEnd} />
          <AddMarker position={end} draggable={true} onDragEnd={handleEndMarkerDragEnd} />
          <DrawRoute />
        </MapContainer>
      ) : (
        <p>{error ? `Error: ${error}` : "Loading..."}</p>
      )}
    </div>
  );
};

export default MapWithRoute;
