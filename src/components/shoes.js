import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import '../styles/style_components/shoes.css'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Shoes() {
  const position = [31.2156, 29.9553];
  return (
    <>
    <div className="shoes">
        <div className="location">
            <h5>العنوان</h5>
            <p>
                المملكة العربية العمودية, دبي, 15 مصنع الألفي أمام مولات العربي
            </p>
        </div>
        <div className="map">
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                <Popup>شركة ويفي لبيع الستائر</Popup>
                </Marker>
            </MapContainer>
        </div>
        <div className="timework">
            <h5>سعات العمل</h5>
            <p>9AM - 9PM :الأحد</p>
            <p>9AM - 9PM :الأتنين</p>
            <p>9AM - 9PM :الأثلاثاء</p>
            <p>9AM - 9PM :الأربعاء</p>
            <p>9AM - 9PM :الخميس</p>
            <p>9AM - 9PM :السبت</p>
        </div>
    </div>
    <p className="copyRight">جميع الحقوق محفوظة لشركة ويفي، تطوير وتصميم شركة White Sky.</p>
    </>
  );
}