import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import introVideo from '../assets/videos/video.mp4'
import introImg from '../assets/img/Снимок экрана от 2021-07-02 23-48-24 1.png'

const VideoPlayer = () => {
  return (
      <Video
      className='w-9/10 bg-cover bg-center h-screen'
      autoPlay loop 
      poster={introImg}
      onCanPlayThrough={()=>{
        console.log('video play')
      }}
      >
    <source src={introVideo} type='video/webm'/>
      </Video>
  );
};

export default VideoPlayer
