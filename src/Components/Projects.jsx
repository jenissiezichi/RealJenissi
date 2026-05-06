import React, {useEffect, useRef, useState} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all"
import one from './Por/dabwin.png'
import two from './Por/cgpa.png'
import three from './Por/cal.png'


gsap.registerPlugin(ScrollTrigger);

const project= [
    {
        id:'MODULE_01',
        name:'Dabwins Cuisines',
        desc: 'A single Page food Business site. ' +
            'Comfort In every Bite - Bringing ecstasy to your cravings',
        stack : ['React', 'Tailwind', 'ShadCN'],
        img: one,
        status: 'LIVE',
        link : 'https://dabwins.vercel.app/',

    },
    {
        id: 'MODULE_02',
        name: 'CGPA Calculator',
        desc: 'Smart CGPA calculator for university students. Supports 5-point grading scale.',
        stack: ['HTML', 'Tailwind', 'JavaScript'],
        status: 'LIVE',
        img: two,
        link: '/Cgpa/index.html',
    },
    {
        id: 'MODULE_03',
        name: 'Web Calculator',
        desc: 'A user friendly web calculator for proper mathematical calculations.',
        stack: ['HTML', 'Tailwind', 'JavaScript'],
        status: 'LIVE',
        img: three,
        link: "/calculator/index3.html",
    },
    {
        id: 'MODULE_04',
        name: 'CineVault',
        desc: 'A Movie Vault For Trailers And Recommendation Using Api.',
        stack: ['HTML', 'Tailwind', 'JavaScript','FastApi', 'GSAP'],
        status: 'Under-Development',
        img: three,
        link: "https://jenissiezichi.github.io/CineVault/",
    },


]

export default function Projects() {

 const projects = useRef(null);

 useGSAP(()=>{
     gsap.from( '.display',{
         scrollTrigger: {
             trigger: projects.current,
             start: 'top 50%',
             end: 'top 20%',
             toggleActions: 'play none none reverse',
             scrub: true,
         },
         y:60,
         rotation:360,
         duration:2,
         stagger:0.5,
         ease:'power3.out',
     })
 },[])
    return (
        <section className="px-6 md:px-20 py-24 -mt-37.5" id="projects" ref={projects}>
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-white font-black tet-2xl tracking-widest border-l-4 border-primary pl-4">
                    ACTIVE_MODULES
                </h2>
                <div className="h-px grow bg-white/20"/>
                <span className="text-primary font-mono text-xs animate-pulse">LIVE</span>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">



            {
                project.map((project) => (
                    <div key={project.id} className="display bg-[#141414] border border-white/10 p-6 flex flex-col gap-4
                    hover:border-primary hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-center w-full">
                          <img src={project.img} className="w-full h-64 rounded-3xl"/>
                      </div>
                        <div className="flex justify-between items-center">
                            <span className="text-primary font-mono text-xs tracking-widest">{project.id}</span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-800/5 border border-green-300">
                                <div className="w-1.5 h-1.5 bg-green-800 rounded-full animate-ping"/>
                                <span className="uppercase tracking-widest text-[10px] text-green-700 font-mono font-black">LIVE</span>
                            </div>
                        </div>

                        <h3>
                            {project.name}
                        </h3>
                        <p>{project.desc}</p>

                        <div className="flex flex-wrap gap-2">
                            {
                                project.stack.map((tech)=>(
                                    <span key={tech} className="font-mono text-muted border border-white/10 px-2 py-1 uppercase tracking-widest">{tech}</span>
                                ))
                            }
                        </div>
                        <a href={project.link} className="border-2 border-white/10 font-mono text-xs tracking-widest hover:border-primary mt-2 py-2 px-4 text-center text-muted font-bold hover:text-primary">LAUNCH_PROJECT</a>

        </div>


                ))}

            </div>


        </section>
    )
}
