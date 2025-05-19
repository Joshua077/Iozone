import React from 'react'
import './Modal.css'
export default function Location() {
  return (
    <div
    className='modal_container'
>
    <div
        className='location_modal_container'
    >
        <div className='location_modal_content'>
            <h2>Enable Location</h2>
            <p>We need your location to show potential matches nearby. Please enable location services.</p>
             <button>
                Enable location
             </button>

             <p>Not Now</p>
        </div>

    </div>

</div>
  )
}
