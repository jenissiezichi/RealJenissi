import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const styleNav =
        " text-sm text-text1 hover:text-primary" +
        " hover:font-bold cursor-pointer transition-colors" +
        " border-b-2 border-transparent duration-150 pb-1 " +
        "hover:border-primary hover:uppercase";

    const navLinks = [
        { label: "Home", href: "#main" },
        { label: "About", href: "#about1" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#Skill" },
        { label: "Contacts", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 border-b border-primary/20 flex flex-col bg-[#505050]/95 backdrop-blur-sm">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-3">
          <span className="text-lg font-black tracking-tight">
            &lt;REAL<span className="text-primary italic">_JENISSI/&gt;</span>
          </span>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a key={link.href} className={styleNav} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                        <span className="uppercase tracking-widest text-[10px] text-primary font-mono">ACTIVE</span>
                    </div>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
                <nav className="flex flex-col px-6 pb-4 gap-4 border-t border-primary/20 pt-4">
                    {navLinks.map((link) => (
                        <a key={link.href} className={styleNav} href={link.href} onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}