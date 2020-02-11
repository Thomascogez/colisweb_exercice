import { GoogleApiWrapper, InfoWindow, Map as GMap, Marker } from 'google-maps-react';
import React, { useContext, useEffect, useState } from 'react';
import {AppContext} from '../../context/AppContext';


const Map = (props: { google: any }) => {

    const { google } = props;
    const appContext = useContext(AppContext);
    const [selectedMarker, setSelectedMarker] = useState<any>();
    const [selectedMarkerInfo, setSelectedMarkerInfo] = useState<string>("");
    const [visibleMarker, setVisibleMarker] = useState<boolean>(false);

    const onMarkerClick = (props, marker, e) => {
        setSelectedMarkerInfo(props.name)
        setSelectedMarker(marker);
        setVisibleMarker(true);
    }

    const onInfoWindowClose = () => {
        setSelectedMarkerInfo("")
        setSelectedMarker(null);
        setVisibleMarker(false);
    }
    return (
        <GMap
            google={google}
            zoom={appContext.zoom}
            initialCenter={{ 
                lat: appContext.coordinate.lat, 
                lng: appContext.coordinate.lng
            }} 
            center={{
                lat: appContext.coordinate.lat,
                lng: appContext.coordinate.lng
              }}
        >
            {appContext.searchResult.map(result => (

                <Marker key={result.properties.id}
                    name={result.properties.label}
                    onClick={onMarkerClick}
                    position={{ lat: result.geometry.coordinates[1], lng: result.geometry.coordinates[0] }}
                />
            ))}
            <InfoWindow
                marker={selectedMarker}
                visible={visibleMarker}
                onClose={onInfoWindowClose}
            >
                <div>
                    <p>{selectedMarkerInfo}</p>
                </div>
            </InfoWindow>

        </GMap>

    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBOSz0bLa68-jJ5rOPG4_VbLGfaNnsrvSY'
})(Map);