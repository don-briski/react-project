import React from 'react';
import './Intro.css';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'

const Intro = () => {
  const [playvideo, setPlayVideo] = React.useState(false)
  const VidRef = React.useRef()

  const handleVideo = () => {
    setPlayVideo( (prevPlayVideo) => !prevPlayVideo )

    if(playvideo) {
      VidRef.current.pause()
    } else {
      VidRef.current.play()
    }
  }
  return(
  <div className='app__video' >
  <video 
    src={meal} 
    ref={VidRef}
    type='video/mp4'
    loop
    controls={false}
    muted
  />

  <div className='app__video_overlay flex__center'>
    <div className='app__video-overlay_circle flex__center' 
    onClick={handleVideo}>
      { playvideo ? (
        <BsPauseFill color='#fff' size={30} />
      ):
      (
        <BsFillPlayFill color='#fff' size={30} />
      )}
    </div>
  </div>
  </div>
)
  }

export default Intro;
