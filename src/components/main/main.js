import React from 'react'
import  './main.css'
import hero from '../../images/image-hero-desktop.png'

const Main = () => {
    return(
        //fragments
        <React.Fragment>
            <main className='main container justify-content-center align-items-center vh-100 d-flex'>
                <div className=' text-start  col-lg-6 '> 
                     <h1 className='fw-bold'>Make <br /> remote work</h1>
                    <p className=''>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                    </p>
                    <button type="button" class="btn btn-dark">Learn more</button>

                    
                </div>
                <div className='col-lg-6 '>
                    <img src={hero} className='hero'></img>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main