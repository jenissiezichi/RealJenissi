import React from 'react'

export default function Navbar() {

    const styleNav =
        " text-sm text-text1 hover:text-primary" +
        " hover:font-bold cursor-pointer transition-colors" +
        " border-b-2 border-transparent duration-150 pb-1 " +
        "" +
        "hover:border-primary hover:uppercase"
    return (
        <header className="fixed top-0 w-full z-50 border-b border-primary/20
        flex justify-between items-center px-6 py-4 bg-[#505050]/95 backdrop-blur-sm">

            <div className="flex items-center gap-3">
                <span className="text-lg font-black tracking-tight">&lt;REAL<span className="text-primary italic">_JENISSI/&gt;</span></span>
            </div>

            <nav className="hidden md:flex items-center gap-10">
                <a className={styleNav} href="#home">Home</a>
                <a className={styleNav} href="#about">About</a>
                <a className={styleNav} href="project">Projects</a>
                <a className={styleNav} href="contact">Contacts</a>
            </nav>
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"/>
                <span className="uppercase tracking-widest text-[10px] text-primary font-mono">ACTIVE</span>
            </div>

              </header>
    )
}