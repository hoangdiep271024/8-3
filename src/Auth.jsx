import React from 'react'
import './Auth.css'
export default function Auth() {
  return (
    <div style= {{width: '100vw', height: '100vh', background: '#E97064', position: 'relative'}}>
         <img src='./bg2.jpg' style={{width: '40%', height: '100%', objectFit: 'cover', marginLeft: '30%'}}></img>
         <div className='text' style={{position:'absolute', zIndex: '10', top: '17%', marginLeft: '36%', fontFamily: 'Sriracha', width: '28%', height: 'auto', maxHeight: '30%', overflow: 'hidden', fontSize: '1.2vw'}}>Chúc cậu 8/3 vui vẻ, lúc nào cũng xinh đẹp như hoa, tích cực, lạc quan yêu đời. Chúc cậu sẽ luôn hạnh phúc như nàng công chúa trong chuyện cổ tích. Cảm ơn cậu vì đã đến bên tớ, làm cho mỗi ngày của tớ trở nên đặc biệt hơn rất nhiều. Tớ yêu cậu <img src = './hoa.png' style={{width: '3vw', height: '6vh', objectFit: 'cover', position: 'absolute', marginTop: '-7px'}}></img></div>
      </div>
  )
}
