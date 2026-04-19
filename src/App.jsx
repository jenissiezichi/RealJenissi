import React from 'react';
import './App.css'
import Hero from './Components/Hero.jsx'
import Navbar from './Components/Navbar.jsx'
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
export default function App() {

    return(
            <main className="min-h-screen bg-[#050505] text-text1">
            <Navbar/>
            <Hero/>
                <About/>
                <Projects />
            </main>

    )
}


























































// // function GsapTo(){
// //
// //     useGSAP(() =>{
// //         gsap.to('#blue',{
// //             x: 250,
// //             repeat: -1,
// //             yoyo: true,
// //             rotation: 180,
// //             duration: 2,
// //             ease: 'bounce.inOut',
// //         })
// //     },[]);
// //
// //     useGSAP(() =>{
// //         gsap.fromTo('#green',{
// //             x:0,
// //             rotation: 0,
// //             borderRadius: '0%',
// //             backgroundColor: 'yellow',
// //             },
// //             {
// //             x: 250,
// //             repeat: -1,
// //             yoyo: true,
// //             rotation: 360,
// //                 borderRadius: '100%',
// //             duration: 2,
// //                 backgroundColor: 'red',
// //             ease: 'bounce.out',
// //         })
// //     },[]);
// //
// //  const timeline = gsap.timeline({
// //      repeat: -1, repeatDelay : 1, yoyo: true,
// //  });
// //
// //  useGSAP(() =>{
// //      timeline.to('#amber',{
// //          y:-250,
// //          scale:2,
// //          duration: 2,
// //          borderRadius:'100%',
// //          ease: 'bounce.inOut',
// //      })
// //
// //      timeline.to('#amber',{
// //          x:250,
// //          rotation:360,
// //          borderRadius: '100%',
// //          duration: 2,
// //          ease: 'bounce.inOut',
// //      })
// //
// //      timeline.to('#amber',{
// //          y:250,
// //          scale:2,
// //          duration: 2,
// //          borderRadius:'100%',
// //          ease: 'bounce.inOut',
// //      })
// //      timeline.to('#amber',{
// //          x:500,
// //          scale:1,
// //          rotation:360, borderRadius: '8px',
// //          duration: 2,
// //         ease: 'back.inOut',
// //      })
// //  },[])
// //
// //
// //     useGSAP(() =>{
// //         gsap.to('.stagger',{
// //             y:50,
// //             rotation:360,
// //             borderRadius:'100%',
// //             repeat:-1,
// //             yoyo: true,
// //             stagger: {
// //                 amount:1.5,
// //                 grid: [2,1],
// //                 axis: 'y',
// //                 ease:'circ.inOut',
// //                 from: 'center'
// //             }
// //
// //         })
// //     },[]);
// //   return(<div className="flex items-center justify-center w-full md:w-1/3 lg:w-auto mt-40">
// //       <div id="blue" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
// //
// //       <div id="green" className="mt-20 w-20 h-20 rounded-lg"></div>
// //
// //
// //           <div className="mt-40">
// //
// //               <div id="amber" className="mt-20 w-20 h-20 rounded-lg bg-amber-600"></div>
// //          <button onClick={()=>{
// //              if (timeline.paused())
// //                  timeline.play();
// //              else
// //                  timeline.pause();
// //          }} className="border border-amber-300 bg-blue-500 rounded-lg shadow-amber-300 cursor-pointer">Play/Pause</button>
// //           </div>
// //
// //
// //
// //           <div className="mt-110 flex flex-row gap-3.5">
// // <div className="stagger w-15 h-20 rounded-lg
// //  bg-blue-200"></div>
// //               <div className="stagger w-15 h-20 rounded-lg
// //  bg-blue-300"></div>
// //               <div className="stagger w-15 h-20 rounded-lg
// //  bg-blue-400"></div>
// //               <div className="stagger w-15 h-20 rounded-lg
// //  bg-blue-500"></div>
// //               <div className="stagger w-15 h-20 rounded-lg
// //  bg-blue-600"></div>
// //
// //
// //
// //
// //
// //           </div>
// //   </div>
// //
// //   )
// //
// //
// // }
// //export default GsapTo
//
// export default function App() {
//  // const scrollRef = useRef();
//  //
//  //    useGSAP(()=>{
//  //        const boxes =
//  //            gsap.utils.toArray(scrollRef.current.children);
//  //        boxes.forEach((box)=>{
//  //            gsap.to(box,{
//  //                x:150 *(boxes.indexOf(box)+5),
//  //                rotation:360,
//  //                borderRadius: '100%',
//  //                scale: 1.5,
//  //                scrollTrigger: {
//  //                    trigger:box,
//  //                    start: 'bottom, bottom',
//  //                    end : 'top 20%',
//  //                    scrub: true
//  //                },
//  //                ease: 'bounce.inOut',
//  //            })
//  //        })
//  //    },{scope:scrollRef});
//
//   useGSAP(()=>{
//       gsap.to('#text',{
//           ease: "power1.inOut",
//           opacity: 1,
//           y : 0,
//           duration: 2,
//           }
//       )
//
//       gsap.fromTo('#para',{
//           opacity: 0,
//       y:20
//       },
//           {
//               opacity: 1,
//               y:0,
//               delay:1,
//               stagger:0.2,
//           })
//   }, []);
//     return(
//         <main className="text-center text-red-700 bg-black">
// <h1 id="text" className="font-bold translate-y-10 text-center opacity-0">Gsap Scroll Triggers</h1>
//  <p id="para" className="py-6 text-sm text-gray-600 max-w-xl leading-relaxed text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
//      Veniam, t
//      empora quae nemo vitae quisquam eveniet sit commodi saepe
//      similique, officiis aliquam aut totam, tenetur quos
//      debitis odio? Ut, voluptatibus provident.</p>
//
//      <p id="para" className="py-6 text-sm text-gray-600 max-w-xl leading-relaxed text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//          Soluta possimus aut blanditiis accusantium reprehenderit
//          provident doloribus assumenda repellendus porro iste do
//          lores non ut a ex facilis, obcaecati optio recusandae nec
//          essitatibus.</p>
//
//    <p id="para" className="py-6 text-sm text-gray-600 max-w-xl leading-relaxed text-center">  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//        Soluta possimus aut blanditiis accusantium reprehenderit
//        provident doloribus assumenda repellendus porro iste do
//        lores non ut a ex facilis, obcaecati optio recusandae nec
//        essitatibus.</p>
//     <p id="para" className="py-6 text-sm text-gray-600 max-w-xl leading-relaxed text-center"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//      Soluta possimus aut blanditiis accusantium reprehenderit
//      provident doloribus assumenda repellendus porro iste do
//      lores non ut a ex facilis, obcaecati optio recusandae nec
//      essitatibus.
//      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//      Soluta possimus aut blanditiis accusantium reprehenderit
//      provident doloribus assumenda repellendus porro iste do
//      lores non ut a ex facilis, obcaecati optio recusandae nec
//      essitatibus.
//      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//      Soluta possimus aut blanditiis accusantium reprehenderit
//      provident doloribus assumenda repellendus porro iste do
//      lores non ut a ex facilis, obcaecati optio recusandae nec
//      essitatibus.
//      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//      Soluta possimus aut blanditiis accusantium reprehenderit
//      provident doloribus assumenda repellendus porro iste do
//      lores non ut a ex facilis, obcaecati optio recusandae nec
//      essitatibus.
//      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//      Soluta possimus aut blanditiis accusantium reprehenderit
//      provident doloribus assumenda repellendus porro iste do
//      lores non ut a ex facilis, obcaecati optio recusandae nec
//      essitatibus.
//  </p>
//             <div className="mt-6 w-full h-screen">
//                 <div id="scroll-green" className="bg-green-500
//                 w-20 h-20 rounded-lg"/>
//
//                 <div id="scroll-green" className="mt-6 bg-pink-500
//                 w-20 h-20 rounded-lg"/>
//
//             </div>
//
//
//             <p className="text-sm text-gray-600 max-w-xl leading-relaxed text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Veniam, t
//                 empora quae nemo vitae quisquam eveniet sit commodi saepe
//                 similique, officiis aliquam aut totam, tenetur quos
//                 debitis odio? Ut, voluptatibus provident.
//
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Soluta possimus aut blanditiis accusantium reprehenderit
//                 provident doloribus assumenda repellendus porro iste do
//                 lores non ut a ex facilis, obcaecati optio recusandae nec
//                 essitatibus.
//
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Soluta possimus aut blanditiis accusantium reprehenderit
//                 provident doloribus assumenda repellendus porro iste do
//                 lores non ut a ex facilis, obcaecati optio recusandae nec
//                 essitatibus.
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Soluta possimus aut blanditiis accusantium reprehenderit
//                 provident doloribus assumenda repellendus porro iste do
//                 lores non ut a ex facilis, obcaecati optio recusandae nec
//                 essitatibus.
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Soluta possimus aut blanditiis accusantium reprehenderit
//                 provident doloribus assumenda repellendus porro iste do
//                 lores non ut a ex facilis, obcaecati optio recusandae nec
//                 essitatibus.
//             </p>
//         </main>
//     )
// }
