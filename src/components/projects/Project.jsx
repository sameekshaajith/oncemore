import React from 'react'
import './project.css'
import Youtube from 'react-youtube'

//https://youtu.be/B9dJDUY747k
//https://www.youtube.com/watch?v=B9dJDUY747k
function Project(props) {
    const { video } = props

    const onReady = (event) => {
        console.log(event.target)
        // event.target.pauseVideo()
        // event.target.playVideo()
        event.target.stopVideo()
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars : {
            autoplay: 1
        }
    }

    return (
        <div className='project'>
            {/* <div className='video'>
                <video width="320" height="240" controls>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>
            <div className='caption'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div> */}
            <Youtube
                videoId="B9dJDUY747k"
                opts={opts}
                onReady={onReady}
            />
        </div>
    )
}

export default Project