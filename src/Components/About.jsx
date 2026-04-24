import React, {useEffect, useRef, useState} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {SplitText, ScrollTrigger, ScrambleTextPlugin} from "gsap/all"

import Typed from "typed.js";




gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

import one from './Por/j2.png'
import two from './Por/3.png'
import three from './Por/IMG-20260118-WA0330.jpg'
import four from './Por/me.jpg'
import five from './Por/20251130_115817.jpg'
import six from './Por/20251223_154054.jpg'
import sixx from './Por/1.png'
import seven from './Por/Screenshot_20251109-163218_Gallery.jpg'
import eight from './Por/p.png'
 const list=[
     {
         src: sixx , desc : 'Kicking Off.....',
     },
    {
        src: one , desc : 'Lets Get Started',
    },
    {
        src: two, desc : 'Nothing TO Say😊',
    },
    {
        src: three, desc : 'People I call Family'
    },
    {
        src: four, desc: 'Just Me Again'
    },
    {
        src: five, desc : 'More',
    },
    {
        src: seven, desc: 'One Of Musical Moments'

    },
    {
        src: six, desc: 'My Musical Moments are Gold'
    },
     {
         src: eight, desc: 'So Bye........😊'
     }

];
export default function About() {
    const moreMe = useRef(null);
    useEffect(() => {
        const typing = new Typed(moreMe.current, {
            strings: ['&gt; Want to Know More About My Space Click Below'],
            typeSpeed: 30,
            backSpeed: 20,
            backDelay: 1000,
            showCursor: true,
            loop: true
        })
        return () => typing.destroy()
    },[])


    const [showMore, setShowMore] = useState(false);
    const [index, setIndex] = useState(0);
    const hasNext = index < list.length - 1;
    function toggleShowMore() {
        setShowMore(!showMore);
    }
function handleNext() {
        if (hasNext) {
            setIndex(index + 1);
        }
        else{
            setIndex(0);
        }
}


let listedGallery = list[index];
 const Gallery=useRef(null);
    useEffect(()=>{
        if(!showMore) return

        const typed = new Typed(Gallery.current, {
            strings:[listedGallery.desc],
        typeSpeed : 50,
            showCursor: true,
            loop:false,
        })
        return () => typed.destroy()
    },[index,showMore])


    const imgRef = useRef(null);
    useGSAP(()=>{
        if(!showMore) return
        gsap.fromTo(imgRef.current,{
opacity:0,
            y:30
        },
            {
                opacity:1,
                y:0,
                duration:0.5,
            }
            )
    },[index,showMore]);


 useGSAP(()=>{
     const tl = gsap.timeline({
             scrollTrigger:{
                 trigger:'#about1',
                 start: 'top 60%',
                 end: 'bottom center',
                 scrub:true,
             }

         })
     tl.from('.about',{
        y:100,
         opacity: 0,
         stagger: 0.2,
         ease: 'power2.out',
     })
     })

    return(
        <section className="px-6 md:px-20 py-24" id="about1">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-white font-black text-2xl tracking-widest border-l-4 border-primary pl-4">ABOUT_ME</h2>
                <div className="h-px grow bg-white/20"/>
                <span className="text-primary font-mono text-xs animate-pulse">SYS_READ</span>
            </div>

<div className="grid grid-cols-1 gap-12 md:grid-cols-1 ">
   <div className="flex flex-col gap-6">
       <p className="about text-muted text-sm leading-relaxed max-w-xl">I'm Eziokwubundu Jenissi Ezichi
           An aspiring Software Engineering Student at Federal University Of Technology Owerri (FUTO), Nigeria.
           Building interfaces that feels alive, One Component at a time.
       </p>
       <p className="about text-muted text-sm leading-relaxed max-w-xl">
           In 2016 Music Found Me and Never Let go.
           Today it is just mere sounds or Rhythm to me but fuels my code -
           when I hit a wall, music gets me back on track.
       </p>

       <p className="about text-muted text-sm leading-relaxed max-w-xl">
       So Ever Since I've been constantly working on myself - building, growing
       and grinding musically and technically. Currently on a Journey to becoming a {' '}
       <span className="text-primary font font-mono">Fullstack Engineer</span>
       , creating programs and solutions that actually stand out and makes a difference.
       </p>
       <p className="about text-primary font-mono  text-xs tracking-widest">$ echo <span className="text-white">"Progress Over Comparison"</span></p>


       <h3 ref={moreMe}className="font-mono min-h-[60px]"/>
       <button className=" w-40 border border-primary text-primary text-xs font-mono px-6 py-3 uppercase tracking-widest
                hover:bg-primary hover:text-[#050505] transition-all duration-500 hover:font-black font-bold cursor-pointer"
onClick={toggleShowMore}>{showMore ? 'HIDE Gallery':'SHOW Gallery'}</button>
     <div className="flex flex-col items-center gap-4 mb-12">
         {showMore &&

                <button className="w-20 border border-primary text-primary text-xs font-mono px-6 py-3 uppercase tracking-widest
                hover:bg-primary hover:text-[#050505] transition-all duration-500 hover:font-black font-bold cursor-pointer"
                        onClick={handleNext}>Next</button>

         }
         {showMore &&<h2 className="text-primary font-mono tracking-widest font-black">My_Circle</h2>}
         {
             showMore && <h3 className="text-muted font-mono text-xs tracking-widest font-black">({index+1} of {list.length})</h3>
         }
         {
             showMore &&
             <img ref={imgRef} src={listedGallery.src} className="w-64 h-64 md:w-96 md:h-96 rounded-3xl object-cover border-4 border-primary"/>
         }
         {showMore && <p className="text-primary font-mono text-xs mt-3">
             &gt; <span ref={Gallery}/>
         </p>}
     </div>

   </div>

</div>
        </section>
    );
}
