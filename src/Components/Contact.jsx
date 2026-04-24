import React, {useEffect, useRef, useState} from 'react';
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all"

import Typed from "typed.js";

export default function Contact() {
   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [status, setStatus] = useState(null);
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Loading...");

        try{
           const response = await fetch("https://realjenissiback.onrender.com/contact", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
});       
    const data = await response.json();

            if(data.success){
                setStatus('success');
                setFormData({name: '', email: '', message: ''});
            }
        }
        catch(error){
            setStatus('error');
        }
    }
    return (
        <section className="contact px-6 md:px-20 py-24" id="contact">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-white font-black text-2xl tracking-widest border-l-4 border-primary pl-4">
                    CONTACT
                </h2>
                <div className="h-px grow bg-white/20"/>
                <span className="text-primary font-mono text-xs animate-pulse">OPEN</span>
            </div>
               <div className="chat max-w-xl flex flex-col gap-4 bg-[#141414] py-4 px-6 rounded-3xl">
                   <div className="flex flex-col gap-2">
                       <label className="text-primary font-black font-mono text-xs tracking-widest uppercase">NAME</label>
                       <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="bg-[#141414] border border-white/10 px-4 py-3 text-white text-xs font-mono focus:outline-none
                    focus:border-primary transition-colors" required/>
                   </div>

                   <div className="flex flex-col gap-2">
                       <label className="text-primary font-black font-mono text-xs tracking-widest uppercase">Email</label>
                       <input name='email' value={formData.email} onChange={handleChange} placeholder="you@gmail.com" className="bg-[#141414] border
                       border-white/10 px-4 py-3 text-white text-xs font-mono focus:outline-none
                    focus:border-primary transition-colors" required/>
                   </div>


                   <div className="flex flex-col gap-2">
                       <label className="text-primary font-black font-mono text-xs tracking-widest uppercase">MESSAGE</label>
                       <textarea name='message' value={formData.message} onChange={handleChange} placeholder="Your Message......." className="bg-[#141414] border
                       border-white/10 px-3 py-10 text-white text-xs font-mono focus:outline-none
                    focus:border-primary transition-colors resize-none "
                       rows={5} required/>
                   </div>
                   <button onClick={handleSubmit} className="border border-primary rounded-2xl text-primary font-mono font-black tracking-widest text-xs
                    px-6 py-3 hover:bg-primary hover:text-[#050505] transition-all duration-300 cursor-pointer">SUBMIT🚀</button>
                  <div className="flex items-center gap-6 justify-center">
                      <a href="https://wa.me/2347069632334" target="_blank" className="text-muted font-mono text-xs tracking-widests hover:text-primary
                       transition-colors uppercase">Whatsapp</a>
                      <a href="https://www.linkedin.com/in/ezichijenissi" target="_blank" className="text-muted font-mono text-xs tracking-widests hover:text-primary
                       transition-colors uppercase">LinkedIN</a>
                      <a href="https://www.instagram.com/the_realjeni?igsh=MXUzZGdxejdlanJqbg==" target="_blank" className="text-muted font-mono text-xs tracking-widests hover:text-primary
                       transition-colors uppercase">Instagram</a>
                  </div>
                   {
                       status === 'success' && <p className="text-green-700
                       font-mono font-black text-xs tracking-widest">✅Message Sent SuccessFully</p>
                   }
                   {
                       status === 'error' && <p className="text-green-700
                       font-mono font-black text-xs tracking-widest">❌FAILED. Check your Connection</p>
                   }
               </div>



        </section>
    )
}
