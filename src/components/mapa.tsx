import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

function Mapa() {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if (!navigator.geolocation) {
      alert("Geolocalización no disponible");
      return;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    function success(position: GeolocationPosition) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const map = L.map("map", {
        center: [lat, lng],
        zoom: 15
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "OpenStreetMap"
      }).addTo(map);

      (L as any).Routing.control({
        waypoints: [
          L.latLng(lat, lng),
          L.latLng(40.417731, -3.703704)
        ],
        language: "es"
      }).addTo(map);
    }

    function error() {
      alert("No se pudo obtener la ubicación");
    }
  }, []);

  return <div id="map" style={{ height: "500px" }}></div>;
}

export default Mapa;