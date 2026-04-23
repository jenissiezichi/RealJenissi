import React, {useEffect, useRef, useState} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all"

import Typed from "typed.js";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
export default function Footer() {

    return (

          <footer className="border-t-4 border-white/10 bg-[#141414] px-6 md:px-20 py-10" id="footer">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                  <div className="flex flex-col gap-1 text-center">
                      <span className="text-white font-black tracking-wider">&lt;Real
                      <span className="text-primary">Jenissi</span>
                          /&gt;
                          </span>
                      <span className="text-muted font-mono text-xs tracking-width">&copy; 2026 JENISSI EZICHI. ALL RIGHTS RESERVED.</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5">
<div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"/>
                      <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
                          Open to Opportunities
                      </span>
              </div>

                  <div className="flex gap-6">
                      <a href="" target="_blank" className="text-muted font-mono text-xs tracking-widests hover:text-primary
                       transition-colors uppercase">Github</a>

                      <a href="" target="_blank" className="text-muted font-mono text-xs tracking-widests hover:text-primary
                       transition-colors uppercase">Old Portfolio</a>

                      <a href="" target="_blank" className="text-muted font-mono text-xs tracking-widests hover:text-primary
                       transition-colors uppercase">Email</a>


                  </div>

                  <div className="mt-8 flex justify-center">
<p className="text-muted font-mono text-[10px] tracking-widest ">
    THANKS FOR VISITING
</p>
                  </div>

              </div>

          </footer>
    )
}