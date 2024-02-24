import './heroimg.css'

import React from 'react'

import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src='https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Intro Image'/>
        </div>

        <div className='content'>
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg