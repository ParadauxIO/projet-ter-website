import { MapContainer, TileLayer } from 'react-leaflet';
import "./MapView.scss"
import "./HomeDashboard.scss"

export default function MapView() {
    const mapCenter = [42.2619188, 13.7007411];
    const zoom = 6;


    return (
        <div className="map-view">
            <div className='map-header'>
                <h1>Maps</h1>
                <p> TODO: add options and pins to the map</p>
            </div>
            <div className="center-map">
                <MapContainer center={mapCenter} zoom={zoom} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Rían Errity .............'
                    />
                </MapContainer>
            </div>
        </div>
    );
}