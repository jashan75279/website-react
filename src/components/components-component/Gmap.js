import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import '../.env.local';
export default function Map(){


    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyAxlJdiS-LQBa9dxo7_Go6EGluwlmOve0Y",
    });
    if (!isLoaded) return <div> Loading...</div>;
    return <Gmap />;
    
}
function Gmap(){
    const center =useMemo(() => ({lat: 16.7364 , lng: 4.3428}),[]);
    return <GoogleMap zoom={10} center ={center} mapContainerClassName=".map">
    <Marker position={center}>

    </Marker>
    </GoogleMap>
}
