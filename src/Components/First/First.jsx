import React from 'react'
import { useState } from 'react';
import Typewritter from 'typewriter-effect';
import './First.css'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import build from '../../img/build.jpg';
import Floating from '../FlotingDiv/Floating';
export const First = () => {
  return (
    <div className="intro">
    
        <div className="i-left">
        <div className="i-name">
            <span>Welcome to </span>
            <span>Agrasarana Group </span>
            <span><Typewritter
            options={{
              autoStart: true,
              loop:true,
              delay:40,
              strings: [
                "We are Agrasarana Group ",
                "We are brands ",
                "Anything else wejhedsbj jnsnjnfsefs"
              ],
            }}
            
            
            /></span>
        </div>

        <button className="button i-button">Email US</button>
        </div>
        <div className="i-right">
             <img src={Vector2} alt=""/>
            <div>
              <Floating/>
            </div>
            

        </div>
    </div>
  )
}
