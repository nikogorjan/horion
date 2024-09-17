import React from 'react';
import './Model.css'

const SketchfabModel = () => {
  return (
    <>
    <div className='remover-top'></div>
    <div
      style={{ width: '100%' }} 
      dangerouslySetInnerHTML={{
        __html: `
          <div class="sketchfab-embed-wrapper" style="width: 100%;"> 
            <iframe title="8 week embryonic eye (cross section)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cc8a70e1df364ae886fec7c514b13598/embed?autostart=1&annotations_visible=1" style="width: 100%; height: 500px;"> </iframe> 
          </div>`
      }}
    />
        <div className='remover-bottom'></div>

    </>
  );
};

export default SketchfabModel;