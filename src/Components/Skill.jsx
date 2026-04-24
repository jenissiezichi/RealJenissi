import React, {useEffect, useRef, useState} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all"

import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'React', level: 'Advanced', color: 'text-blue-400 border-blue-400/30 bg-blue-400/5' },
    { name: 'JavaScript', level: 'Advanced', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5' },
    { name: 'HTML', level: 'Advanced', color: 'text-orange-400 border-orange-400/30 bg-orange-400/5' },
    { name: 'CSS', level: 'Intermediate', color: 'text-blue-300 border-blue-300/30 bg-blue-300/5' },
    { name: 'Python', level: 'Intermediate', color: 'text-green-400 border-green-400/30 bg-green-400/5' },
    { name: 'FastAPI', level: 'Intermediate', color: 'text-green-300 border-green-300/30 bg-green-300/5' },
    { name: 'UI Design', level: 'Intermediate', color: 'text-pink-400 border-pink-400/30 bg-pink-400/5' },
    { name: 'C++', level: 'Beginner', color: 'text-purple-400 border-purple-400/30 bg-purple-400/5' },
    { name: 'Git', level: 'Intermediate', color: 'text-orange-300 border-orange-300/30 bg-orange-300/5' },
    {name : 'Gsap', level : 'Intermediate', color: 'text-green-400 border-green-400/30 bg-green-400/5' },
]


export default function Skill() {
 useGSAP(()=>{
     const tl = gsap.timeline({
         scrollTrigger:{
             trigger:'#Skill',
             start: 'top 60%',
             end: 'bottom center',
             ease:'bounce.out',
             scrub:true,
         }
     })
tl.from('.fadeot',{
    y:100,
    opacity: 0,
    stagger: 0.2,
    ease: 'bounce.out',
})
 })



return (
    <section className="px-6 md:px-20 py-24" id="Skill">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-white font-black text-2xl uppercase tracking-widest border-l-4 border-primary pl-4">
                TECH_STACK
            </h2>
            <div className="h-px flex-grow bg-white/10" />
            <span className="text-primary font-mono text-xs animate-pulse">
          LOADED
        </span>
        </div>
        <div className="fadeot grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
                <div key={skill.name} className={`skill-badge border p-4 flex flex-col gap-2 hover:scale-105 transition-all duration-300 cursor-default ${skill.color}`}>
    <span className="font-black text-sm uppercase tracking-widest">
              {skill.name}
            </span>

                    <span className="font-mono text-[10px] opacity-60 uppercase tracking-widest">
              {skill.level}
            </span>

                </div>
            ))}
        </div>
                </section>
)
}
