import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function About() {
    return (
        <section className="py-24 bg-butt-cream relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-butt-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-butt-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl md:text-8xl font-black text-butt-dark mb-6 drop-shadow-sm">ABOUT</h2>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-16 h-16 mx-auto text-butt-orange" strokeWidth={3} />
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-[2.5rem] p-10 shadow-xl border-4 border-white ring-4 ring-butt-orange/20"
                    >
                        <div className="bg-butt-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black text-butt-orange">
                            01
                        </div>
                        <h3 className="text-4xl font-black mb-4 text-butt-dark">The Mission</h3>
                        <p className="text-xl text-butt-dark/80 font-medium leading-relaxed">
                            $BOOBS isn't just a coin, it's a movement. A movement celebrating minimalism, creativity, and the power of simple lines on the blockchain.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-butt-dark rounded-[2.5rem] p-10 shadow-xl border-4 border-butt-dark"
                    >
                        <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black text-white">
                            02
                        </div>
                        <h3 className="text-4xl font-black mb-4 text-white">The Vision</h3>
                        <p className="text-xl text-white/90 font-medium leading-relaxed">
                            We aim to strip away the complexity of DeFi and return to what matters: vibes, community, and aesthetically pleasing assets.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
