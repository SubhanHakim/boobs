import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full p-4 z-50 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-butt-orange/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
            }`}>
            <span className={`text-3xl font-black tracking-tighter drop-shadow-md transition-colors ${scrolled ? 'text-white' : 'text-white'
                }`}>
                $BOOBS
            </span>
            <div className="flex gap-4">
                <a href="#" className={`px-4 py-2 rounded-full font-bold transition-all backdrop-blur-sm ${scrolled
                        ? 'bg-white text-butt-orange hover:bg-butt-dark hover:text-white'
                        : 'bg-white/20 text-white hover:bg-white hover:text-butt-orange'
                    }`}>
                    Twitter
                </a>
                <a href="#" className={`px-4 py-2 rounded-full font-bold transition-all backdrop-blur-sm ${scrolled
                        ? 'bg-white text-butt-orange hover:bg-butt-dark hover:text-white'
                        : 'bg-white/20 text-white hover:bg-white hover:text-butt-orange'
                    }`}>
                    Chart
                </a>
            </div>
        </nav>
    );
}
