import React from 'react'

const VideoArea = () => {
  return (
    <div className='bg-green-500'>
        <div
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1 style={{ color: "white" }}>Hello React</h1>
    </div>
        <div>
            <h1>Training Name</h1>
            <p>Lorem ipsum</p>
        </div>
    </div>
  )
}

export default VideoArea