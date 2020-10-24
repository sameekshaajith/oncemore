import React from 'react'
import './home.css'
import pic from '../media/picture.jpg'

function Home({goTo}) {

    return (
    <div className='home'>
        <div className='section1'>
            <img src={pic} width={400} height={400} style={{borderRadius:'50%'}}/>
        </div>
        <div className='section2'>
            <div> 
                <div className='hello'>
                    <h1 className='font'>Hello,</h1>
                </div> 
                <div className='bit'>
                    <h3 className='font'>a bit about me:</h3>
                </div>
                <div className='rounds'>
                    <span className='pink' onClick={() => {goTo('Profile')}}>
                        <br /> 
                        <p>MY PROFILE</p>
                    </span>
                    <span className='blue' onClick={() => {goTo('Work')}}>
                        <br />
                        <p>MY WORK</p>
                    </span>
                    <span className='yellowgreen'>
                        <br /> 
                        <p>MY SKILLS</p>
                    </span>
                </div>
                <div>
                    <p>
                        Ex Army Officer from the Indian Army. <br />
                        An entrepreneur. <br />
                        MD/CEO of Arista Associate with TATA AIA Life Insurance. <br />
                        A member of Million Dollar Round Table(MDRT) USA. <br />
                        A qualified Financial Professional. <br />
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home