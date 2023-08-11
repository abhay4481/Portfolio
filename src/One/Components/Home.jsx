import React from 'react'
import vg from '../Assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Abhay</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, magni!</p>
      </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Harum, eum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem, ipsum dolor.
                Lorem ipsum dolor sit.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis debitis, quod impedit aspernatur 
                nostrum cum praesentium nihil ut quia repellendus 
                consectetur iure molestias rem aliquam reprehenderit, 
                excepturi natus! Amet, aliquid.
                </p>
        </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Goggle</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
