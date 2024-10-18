import React, { useRef } from 'react'
import  '../Videoplayer/Videoplayer.css';
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4';
const Videoplayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer  = (e) => {

        if(e.target === player.current){
            setPlayState(false);
        }
        
    }

  return (
    <div className={`video-player ${playState?'': 'hide'}`} onClick={closePlayer} ref={player}>

        <video src={video} autoPlay muted controls> </video>
    </div>
  )
}

export default Videoplayer