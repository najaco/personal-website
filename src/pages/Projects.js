import './Page.css';

import React from 'react';

import SectionTitle from './SectionTitle';
function generateLink(url){
    return <a href={url}>link</a>
}
function Projects() {
  return (
      <div className = 'Page'>
      <SectionTitle title = {'Projects'} icon_id =
       {
         'fas fa-project-diagram'
       } />
        <h2>UDP Video Stream</h2><p>Video streaming service that
          uses a server client model to stream video over UDP,
      with RDT elements when sending over frames with higher
          priority. [{generateLink("https://github.com/nathancohen4299/udp-video-stream")}]</p>
        <h2>Boarding Simulator</h2>
      <p>Multithreaded program to simulate the airbus boarding experience,
      testing different patterns of order to decrease wait
          time. [{generateLink("https://github.com/nathancohen4299/boarding-simulator")}]</p>
    </div>);
}

export default Projects;
