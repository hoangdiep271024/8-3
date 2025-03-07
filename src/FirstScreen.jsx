import React from 'react'
import './FirstScreen.css'
import { useNavigate } from "react-router-dom";
export default function FirstScreen() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/auth");
  }
  return (
    <div style= {{width: '100vw', height: '100vh', background: '#FDDDE8'}}>
    {/* <img src='./heart.gif' style={{height: '40vh', width: 'auto', objectFit: 'cover'}}></img> */}
    <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around'}}>
    <div style={{position: 'relative', width: '50%'}}><video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '20vh',
          width: '100%',
          left: '0',
          height: '60%',
          objectFit: 'cover',
          zIndex: 2, 
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
    
      </video>
      </div>
    <div style={{width: '50%', marginTop: '20vh'}}>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', gap: '0px'}}>
    <div style={{fontFamily: 'Sriracha', fontSize: '2vw'}}>Dear Huong - My girlfriend</div>
    <img src='./heart2.gif' style={{position: 'positive', marginLeft: '-5%'}}></img>
    </div>
    <div style={{display: 'flex', position:'relative'}}>
      <img className='man' src ='./man.png' style={{width: '30%', height: 'auto', objectFit: 'cover', marginLeft: '35%', cursor: 'pointer'}} onClick={click}></img>
      <div className='textt' style={{textAlign: 'center', fontWeight: '800', width: 'auto', backgroundColor: '#fff', height: '30px', padding: '15px', borderRadius: '50%', marginLeft: '-5%', marginTop: '3%' }}>{'Click me:))))'}</div>
    </div>
    

    </div>
    </div>
    </div>
  )
}
