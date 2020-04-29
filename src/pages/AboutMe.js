import './Page.css';

import React from 'react';

import SectionTitle from './SectionTitle';


function About() {
  return (
    <div className='Page'>
    <SectionTitle title={'About Me'} icon_id={
    'fas fa-user-alt'}/>
      <p id="about_me_text">
          My name is Nathan Cohen. I am a junior at Purdue University studying computer science. I am an aspiring software engineer who plans to specialize in the realm of networks, security, and low level systems programming. 
          During summer 2019, I worked at Discover Financial Services where I helped build backend systems that handled highly sensitive data, as well as updating old API's to abide by modern security standards.
          During the spring semester of 2020, I did undergraduate research in the <a href="https://engineering.purdue.edu/%7Eisl/index.htm'>Internet Systems Lab</a> under <a href='https://engineering.purdue.edu/%7Eisl/people.htm">Russell Shirley</a>, 
          where I built a system for streaming video over UDP, which will be used for benchmarking different adaptive streaming algorithms. 
          This summer I will be interning at for Cisco Systems.
        </p>
    </div>
  );
}



export default About;
