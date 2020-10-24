import React from 'react'
import './project.css'

function Project(props) {
    const { video } = props

    return (
        <div className='project'>
            <div className='video'>
                <video width="320" height="240" controls>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>
            <div className='caption'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    )
}

export default Project