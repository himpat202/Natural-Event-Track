//import { Icon } from '@iconify/react'
//import weatherLightningRainy from '@iconify-icons/mdi/weather-lightning-rainy';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import weatherLightningRainy from '@iconify-icons/mdi/weather-lightning-rainy';
import volcanoIcon from '@iconify-icons/emojione/volcano';
import snowflakeIcon from '@iconify-icons/mdi/snowflake';
const Header = () => {
    return (
        <header className="header">
            <h1 ><Icon icon={locationIcon} /> Forestfire,Storm <Icon icon={weatherLightningRainy}/>, Volcano <Icon icon={volcanoIcon}/> & Icerberg<Icon icon={snowflakeIcon}/> Tracker (By NASA API)</h1>
        </header>
    )
}

export default Header