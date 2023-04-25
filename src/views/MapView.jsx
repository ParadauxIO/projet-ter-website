import { MapContainer, TileLayer } from 'react-leaflet';
import "./MapView.scss"
import "./HomeDashboard.scss"

export default function MapView() {
    return (
        <div className="map-view">
            <div className='map-header'>
                <h1>Maps</h1>
            </div>
            <div className="center-map">
                <MapContainer center={[42.2619188,13.7007411]} zoom={6} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </MapContainer>
            </div>
        </div>
    );
}