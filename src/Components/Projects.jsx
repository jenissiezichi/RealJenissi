import React, {useEffect, useRef, useState} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {SplitText, ScrollTrigger, ScrambleTextPlugin} from "gsap/all"

import Typed from "typed.js";

const project= [
    {
        id:'MODULE_01',
        name:'Dabwins Cuisines',
        desc: 'A single Page food Business site. ' +
            'Comfort In every Bite - Bringing ecstasy to your cravings',
        stack : ['React', 'Tailwind', 'ShadCN'],
        status: 'LIVE',
        link : null,

    },
    {
        id: 'MODULE_03',
        name: 'CGPA Calculator',
        desc: 'Smart CGPA calculator for university students. Supports 5-point grading scale.',
        stack: ['HTML', 'Tailwind', 'JavaScript'],
        status: 'LIVE',
        link: 'https://jenissi.me/Cgpa/index.html',
    },


]

export default function Projects() {
    return (
        <section className="px-6 md:px-20 py-24 -mt-37.5" id="projects">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-white font-black tet-2xl tracking-widest border-l-4 border-primary pl-4">
                    ACTIVE_MODULES
                </h2>
                <div className="h-px grow bg-white/20"/>
                <span className="text-primary font-mono text-xs animate-pulse">LIVE</span>

            </div>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            </div>

            {
                project.map((project) => (
                    <div key={project.id} className="bg-[#141414] border border-white/10 p-6 flex flex-col gap-4
                    hover:border-primary transition-all duration-300 group">
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

        </div>


                ))
            }


        </section>
    )
}