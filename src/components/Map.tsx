"use client"

import L from "leaflet";
import "leaflet/dist/leaflet.css";


import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";

interface Coords {
    latitude: number | null;
    longitude: number | null;
}

function SetViewOnClick({ coords }: { coords: Coords }) {
    const map = useMap();

    useEffect(() => {
        if (!coords || coords.latitude === null || coords.longitude === null) {
            // Handle case when coords is null or its properties are null
            return;
        }
        map.setView([coords.latitude, coords.longitude], 13);
    }, [coords, map]);

    return null;
}

interface Position {
    latitude: number | null;
    longitude: number | null;
}
export default function Map() {
    var pawIcon = L.icon({
        iconUrl: '/icons/paw-21.png',
        iconSize: [21, 21], // size of the icon
        popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
    });

    var conventionIcon = L.icon({
        iconUrl: '/icons/location-red.png',
        iconSize: [32, 32], // size of the icon
        popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
    });

    var simpleIcon = L.icon({
        iconUrl: '/icons/dot2.png',
        iconSize: [12, 12], // size of the icon
        popupAnchor: [0, -10] // point from which the popup should open relative to the iconAnchor
    });

    const [position, setPosition] = useState<Position>({
        latitude: null,
        longitude: null,
    });
    // Center Position
    const [center, setCenter] = useState<Position>({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        setPosition({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });

                        console.log(position.coords.latitude, position.coords.longitude);
                        // Recenter the map to the user's location
                    },
                    error => {
                        setError(error.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []);

    // Fake Data to test the map
    const [markerPosition, setMarkerPosition] = useState<[number, number]>([43.686321, -79.621780]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate new position based on current position
            const newPosition: any = [
                markerPosition[0] + (Math.random() - 0.5) * 0.01, // Adjust these values for the desired movement range
                markerPosition[1] + (Math.random() - 0.5) * 0.01
            ];
            setMarkerPosition(newPosition);
        }, 500); // Update position every 1 second

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [markerPosition]); // Re-run effect whenever markerPosition changes


    return (
        <>
            {/* Error */}
            {error && (
                <div className="bg-red-700 text-white p-3 rounded-md mt-2">
                    <i className="fa-solid fa-exclamation-circle mr-1"></i> {error}
                </div>
            )}

            {/* Map */}
            <MapContainer
                className="mt-5 w-full h-[300px]"
                preferCanvas={true}
                center={[43.70011, -79.4163]}
                zoom={11}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Lynix Location */}
                <Marker position={markerPosition} icon={pawIcon}>
                    <Popup>
                        Lynix&apos;s current location at FE 2024 <br />
                        (LynxHR) BPM: 102
                    </Popup>
                </Marker>

                {/* Convention Location */}
                <Marker position={[43.641010, -79.376190]} icon={conventionIcon}>
                    <Popup>
                        Convention Location (Furnal Equinox 2024)
                    </Popup>
                </Marker>

                {/* Your Location */}
                {position.latitude && position.longitude && (
                    <Marker position={[position.latitude, position.longitude]} icon={simpleIcon}>
                        <Popup>
                            Your Location
                        </Popup>
                    </Marker>
                )}

                <SetViewOnClick coords={center} />
            </MapContainer>
            {/* Button to focus to user location */}
            <button
                className="mt-2 bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors"
                onClick={() => setCenter(position)}
            >  Focus to your location </button>
        </>
    )
}