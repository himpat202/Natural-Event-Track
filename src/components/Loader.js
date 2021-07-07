import React from 'react'
import spinner from './spinner.gif'
export const Loader = () => {
    return (
        <div className="loader">
            <img src= {spinner} alt="Loading"/>
            <h2>Fetching Data</h2>
        </div>
    )
}
export default Loader