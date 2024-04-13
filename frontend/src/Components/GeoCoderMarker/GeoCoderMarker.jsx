import { Marker, Popup, MapContainer, useMap } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from "esri-leaflet-geocoder"
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});



function GeoCoderMarker({address}) {
    useEffect(()=>{
        ELG.geocode().text(address).run((err,results,response)=>{
            if(results?.results?.length > 0) {
                const {lat,lng}=results?.results[0].latlng
                setPosition([lat,lng])
                map.flyTo([lat,lng],6)
            }
        },[address])
    })
    const map = useMap();
    const [position, setPosition] = useState([60, 19]);
    return (
        <Marker position={position} icon={DefaultIcon}>
            <Popup />
        </Marker>
    );
}

export default GeoCoderMarker