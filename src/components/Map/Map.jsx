import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { Room } from "@mui/icons-material";

const TOKEN =
  "pk.eyJ1IjoiZm9vZHNoYXJpbmciLCJhIjoiY2xqbDRwaTQxMGxoOTNlbXVheXV2c2NkMCJ9.doPkBORCmsp9viKndTv8qA";
const Map = () => {
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 42.87,
    longitude: 74.59,
    zoom: 10,
  });
  const [showCube, setShowCube] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  console.log(coordinates);

  const exportImage = async (latitude, longitude) => {
    try {
      let url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},${viewport?.zoom},0/400x280?access_token=${TOKEN}`;
      const response = await axios.get(url, {
        responseType: "blob",
      });
      if (response) {
        var reader = new window.FileReader();
        reader.readAsDataURL(response.data);
        reader.onload = function () {
          var imageDataUrl = reader.result;
        };
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddClick = (e) => {
    setShowCube(false);
    const [longitude, latitude] = e.lngLat;
    const newCoordinate = {
      lat: latitude,
      long: longitude,
    };
    const updatedCoordinates = [...coordinates, newCoordinate];
    setCoordinates(updatedCoordinates);
    setNewPlace(newCoordinate);
    exportImage(latitude, longitude);
  };

  return (
    <div id="app" style={{ height: "100vh", width: "100%", zIndex: 999 }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/foodsharing/cljmwnn9n00c301qyg60l5qbx"
        onViewportChange={(viewport) => setViewport(viewport)}
        onClick={handleAddClick}
        attributionControl={true}
      >
        {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            latitude={coordinate.lat}
            longitude={coordinate.long}
            offsetLeft={-3.5 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
          >
            <Room
              style={{
                fontSize: 7 * viewport.zoom,
                color: "tomato",
                cursor: "pointer",
              }}
            />
          </Marker>
        ))}
        {newPlace && (
          <Popup
            latitude={newPlace.lat}
            longitude={newPlace.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
            anchor="left"
          >
            <div>
              <button
                style={{ margin: "0.5rem" }}
                className="button register"
                onClick={() => setShowCube(!showCube)}
              >
                Show 3D Tile
              </button>
              <ul>
                {coordinates.map((coordinate, index) => (
                  <li key={index}>
                    Latitude: {coordinate.lat}, Longitude: {coordinate.long}
                  </li>
                ))}
              </ul>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;
