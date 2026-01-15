import { motion } from 'framer-motion';

export default function Tokenomics() {
    return (
        <section className="py-24 bg-butt-cream text-butt-orange px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-16 text-butt-dark">PURE STATISTICS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: 'TOTAL SUPPLY', value: '1B' },
                        { label: 'TAXES', value: '0/0' },
                        { label: 'LIQUIDITY', value: 'BURNED' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2rem] shadow-xl border-b-8 border-butt-orange"
                        >
                            <h3 className="text-2xl font-bold text-butt-dark opacity-50 mb-2">{item.label}</h3>
                            <p className="text-6xl font-black">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
