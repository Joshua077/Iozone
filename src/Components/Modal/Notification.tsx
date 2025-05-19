import React from 'react'
import './Modal.css'
export default function Notification() {
    return (
        <div
            className='modal_container'
        >
            <div
                className='notification_modal_container'
            >
                <div className='notification_modal_content'>
                    <h2>Keep me posted</h2>
                    <p>We will notify you as soon as you receive new matches
                     and messages.</p>
                     <button>
                        Enable location
                     </button>

                     <p>Not Now</p>
                </div>

            </div>

        </div>
    )
}
