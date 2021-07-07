
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
// npm install --save-dev @iconify/react @iconify-icons/mdi
//import { Icon, InlineIcon } from '@iconify/react';
import weatherLightningRainy from '@iconify-icons/mdi/weather-lightning-rainy';
import volcanoIcon from '@iconify-icons/emojione/volcano';
import snowflakeIcon from '@iconify-icons/mdi/snowflake';
// npm install --save-dev @iconify/react @iconify-icons/emojione


const LocationMarker = ({ k,lat, lng, onClick }) => {
   if(k===0){
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
            
        </div>
    )}
    else if(k===1){
        return(
            <div className="location-marker" onClick={onClick}>
                <Icon icon={weatherLightningRainy} className="location-icon1" />
            </div>
        )
    }
    else if(k===2){
        return(
            <div className="location-marker" onClick={onClick}>
                <Icon icon={volcanoIcon} className="location-icon1" />
            </div>
        )
    }
    else if(k===3){
        return(
            <div className="location-marker" onClick={onClick}>
                <Icon icon={snowflakeIcon} className="location-icon1" />
            </div>
        )
    }
}

export default LocationMarker