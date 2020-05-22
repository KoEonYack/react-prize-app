import React, { useState, useRef } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import ReactPlayer from "react-player";

import './App.css';

function App() {
  const [videoStart, setVideoStart] = useState(false);
  const videoRef = useRef({});

  return (
    <Fullpage>
      <FullPageSections>

        <FullpageSection style={{
          // height: '55vh',
        }}>
        <ReactPlayer
          // url="https://www.youtube.com/watch?v=AWKzr6n0ea0"
          url="https://vimeo.com/421408803"
          // url="./static/winning.flv"
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          width="100%"
          height="55vw"
          onReady={() => console.log("video ready")}
          onStart={() => {
            console.log("video start");
            setTimeout(() => {
              setVideoStart(true);
            }, 2000);
          }}
          onPlay={() => {
            console.log("video play");
            setTimeout(() => {
              setVideoStart(true);
            }, 2000);
          }}
          onError={() => console.log("video error")}
          ref={videoRef}
          style={{
            transition: "0.3s ease-in-out",
            overflow: "hidden",
            position: "absolute",
            zIndex: -1,
            filter: `blur(2px) brightness(${videoStart ? 0.8 : 0})`
          }}
        />


        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'coral',
          padding: '1em',
        }}>
          2
        </FullpageSection>
        
        
        <FullpageSection 
          style={{
          backgroundColor: 'firebrick',
          padding: '1em',
        }}>
          3
        </FullpageSection>

      </FullPageSections>
  </Fullpage>
  );
}

export default App;
