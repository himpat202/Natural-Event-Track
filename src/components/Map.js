import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENT_STORM = 10;
const NATURAL_EVENT_VOLCANO = 12;
const NATURAL_EVENT_SEA_LAKE_ICE = 15;
const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    let k=0,l=0;
    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <LocationMarker k={0} key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title , date:ev.geometries[0].date })} />
        }
        else if(ev.categories[0].id === NATURAL_EVENT_STORM){
            return <LocationMarker k={1} key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title ,date:ev.geometries[0].date})} />
        }
        else if(ev.categories[0].id === NATURAL_EVENT_VOLCANO && ev.id!=="EONET_354"){
            return <LocationMarker k={2} key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title ,date:ev.geometries[0].date})} />
        }
        else if(ev.categories[0].id === NATURAL_EVENT_SEA_LAKE_ICE){
            return <LocationMarker k={3} key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title ,date:ev.geometries[0].date})} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: ' ' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map

