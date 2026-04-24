import React, {useEffect, useRef} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {SplitText, ScrollTrigger, ScrambleTextPlugin} from "gsap/all"
import jeni from './jeni.webp'
import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);




export default function Hero() {
    const imgRef = useRef(null);
    const typedText = useRef(null);

useEffect(() => {
    const typed = new Typed(typedText.current,{
        strings: ['run PROGRESS NOT COMPARISON......',
            'build PROGRESS NOT COMPARISON.....',
            "deploy PROGRESS NOT COMPARISON....."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
    return () => typed.destroy()
},[])

useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(imgRef.current, {
        opacity: 0,
        duration: 0.5,
    })
    .to(imgRef.current, {
        y: -20,
        duration: 0.4,
        ease: 'power1.out',
    })
    .to(imgRef.current, {
        y: 0,
        x: 15,
        duration: 0.4,
        ease: 'power1.out',
    })
    .to(imgRef.current, {
        x: -15,
        duration: 0.4,
        ease: 'power1.out',
    })
    .to(imgRef.current, {
        x: 0,
        duration: 0.3,
    })
    .to(imgRef.current, {
        rotation: 360,
        duration: 0.8,
        ease: 'power2.inOut',
    })
}, []);
    useGSAP(()=>{

 const paraSplit = new SplitText('#para',{type: 'lines'});
        const para1Split = new SplitText('#para1',{type: 'lines'});
        gsap.from(paraSplit.lines,{
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'bounce.out',
            stagger: 0.05,
            delay: 1,
        });
        gsap.from(para1Split.lines,{
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'bounce.out',
            stagger: 0.06,
            delay: 2,
        });
    },[]);

    useGSAP(()=>{
        const heroSplit = new SplitText('#intro1',{type: 'chars'});
        const heroSplit1 = new SplitText('#intro2',{type: 'chars'});

        const tl = gsap.timeline();
        tl.from(heroSplit.chars,{
            y:-600,
            x:600,
            opacity:1,
            duration:1.2,
            stagger:0.1,
            ease: 'bounce.out'
        })
            .from(heroSplit1.chars,{
                y:600,
                x:600,
                opacity:0,
                duration:1.1,
                stagger:0.1,
                ease: 'bounce.out',
            }, '-=0.3')

    },[])
    return(
        <section id="main" className="min-h-screen flex flex-col justify-start px-6 md:px-20 pt-28 md:pt-30">
            <p className="text-white font-head text-sm tracking-widest min-h-[60px]">&gt;&gt; $ <span className="text-primary/80 font-mono">npm</span>
                {' '}   <span ref={typedText}/></p>

<div className="flex flex-col md:flex-row items-center gap-10 mt-8">
  <div className="flex-1 flex flex-col">
      <h1 className="text-primary font-black text-5xl md:text-8xl leading-tight tracking-tight"><span id="intro1">EZICHI</span>
          <br/>
          <span id="intro2" className="text-taupe-100">Jenissi</span>
      </h1>


      <p id="para" className="text-primary font-mono text-sm tracking-widest uppercase mt-4">
          Frontend Engineer/Backend Engineer . Music Lover . Progress Over Comparison
      </p>
      <p id="para1" className="text-muted mt-6 max-w-xl text-sm leading-relaxed">Aspiring Software Engineer building interfaces that feels alive.
          On a Journey from Frontend to Fullstack - One project at a Time.
      </p>
  </div>

   <div className="shrink-0 relative flex items-center justify-center">
       <div className="absolute w-66 h-66 md:w-[400px] md:-[400px] rounded-full border-2 border-primary opacity-20"/>
       <div className="absolute w-70 h-70 md:w-[420px] md:-[420px] rounded-full border-2 border-primary/30"/>
       <img ref={imgRef} src={jeni} className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary"/>
   </div>
</div>

            <div className="flex flex-wrap gap-4 mt-10">

                <a href="#projects" className="border border-primary text-primary text-xs font-mono px-6 py-3 uppercase tracking-widest
                hover:bg-primary hover:text-[#050505] transition-all duration-500 hover:font-black font-bold cursor-pointer">VIEW_PROJECTS</a>

                <a href="#contact" className="border-4 border-white/10 text-muted text-xs font-mono px-6 py-3 uppercase tracking-widest
                hover:border-primary hover:text-primary transition-all duration-500 hover:font-black font-bold cursor-pointer"
                >CONTACT</a>
            </div>

            <div className="flex flex-wrap gap-10 mt-8">
                <div>
                    <p className="text-white font-black text-3xl">+5</p>
                    <p className="text-muted text-xs font-mono uppercase tracking-widest mt-1">Projects Built</p>
                </div>

                <div>
                    <p className="text-white font-black text-3xl">+9</p>
                        <p className="text-muted text-xs font-mono uppercase tracking-widest mt-1">Technologies</p>
                </div>
                <div>
                    <p className="text-white font-black text-3xl">❗</p>
                    <p className="text-muted text-xs font-mono uppercase tracking-widest mt-1">Still Learning</p>
                </div>


            </div>

        </section>
    )
}
