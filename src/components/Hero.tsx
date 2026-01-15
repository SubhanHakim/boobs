import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { Check, Copy } from 'lucide-react';

const Marquee = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none select-none">
        <div className="absolute top-12 -left-10 w-[200%] -rotate-2 bg-white text-butt-orange text-5xl font-black whitespace-nowrap py-2">
            &nbsp;CHEST LINES • NO UTILITY • PURE VIBES • CHEST LINES • NO UTILITY • PURE VIBES • CHEST LINES • NO UTILITY • PURE VIBES •
        </div>
        <div className="absolute bottom-24 -left-10 w-[200%] rotate-2 bg-butt-dark text-butt-orange text-5xl font-black whitespace-nowrap py-2">
            &nbsp;MEME COIN • CHEST ART • ARTISTRY • MEME COIN • CHEST ART • ARTISTRY • MEME COIN • CHEST ART • ARTISTRY •
        </div>
    </div>
);

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("8mpLF2VndtaHDxBVgKJoiYQ3ycPezFNQDNq2bfWRpump");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-butt-orange relative overflow-hidden">
            <Marquee />

            <div className="relative z-10 flex flex-col items-center scale-75 md:scale-100 transition-transform duration-300">
                {/* Logo Section */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                >
                    <div className="relative z-10 p-2 rounded-full border-[6px] border-white/30 backdrop-blur-sm">
                        <img
                            src={logo}
                            alt="$BOOBS Logo"
                            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-[6px] border-white shadow-2xl"
                        />
                    </div>

                    {/* Decorative sparkles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-6 -right-6 text-6xl rotate-12"
                    >
                        ✨
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center mt-[-2rem] z-20 relative"
                >
                    <h1 className="text-[7rem] md:text-[10rem] font-black text-white leading-none tracking-tighter drop-shadow-lg">
                        $BOOBS
                    </h1>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-butt-orange px-6 py-1 rounded-full font-bold text-xl whitespace-nowrap shadow-lg -rotate-1">
                        MINIMALIST • MEME • MASTERPIECE
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-6 mt-16 z-30"
                >
                    <a href="https://pump.fun/coin/8mpLF2VndtaHDxBVgKJoiYQ3ycPezFNQDNq2bfWRpump" className="btn-meme flex items-center justify-center">
                        BUY NOW
                    </a>
                    <button
                        onClick={copyToClipboard}
                        className="btn-meme !bg-butt-dark !text-white !border-butt-dark hover:!bg-white hover:!text-butt-dark min-w-[200px] flex items-center justify-center gap-2"
                    >
                        {copied ? (
                            <>
                                <Check size={24} /> <span>COPIED!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={24} /> <span>COPY CA</span>
                            </>
                        )}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
