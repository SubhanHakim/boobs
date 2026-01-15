import { motion } from 'framer-motion';

// Import images directly
import img1 from '../assets/gallery/Desain tanpa judul (3).png';
import img2 from '../assets/gallery/Desain tanpa judul (4).png';
import img3 from '../assets/gallery/Desain tanpa judul (5).png';
import img4 from '../assets/gallery/Desain tanpa judul (6).png';

const images = [
    { src: img1, caption: "Proof of Boobs (PoB)" },
    { src: img2, caption: "Chart Pattern: Boobs" },
    { src: img3, caption: "Heavy Bags of Boobs" },
    { src: img4, caption: "Boobs > Utility" },
];

export default function Gallery() {
    return (
        <section className="py-24 bg-butt-orange overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-8xl font-black text-white text-center mb-16 drop-shadow-md"
                >
                    LEAKED $BOOBS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-4 pb-12 shadow-[10px_10px_0px_0px_rgba(45,27,14,0.5)] transform transition-transform"
                        >
                            <div className="aspect-square bg-gray-100 overflow-hidden mb-4 border-2 border-gray-200">
                                <img
                                    src={img.src}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <p className="font-handwriting text-butt-dark font-black text-xl text-center -rotate-1">
                                {img.caption}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-white/80 font-bold text-lg">
                        *Strictly for research purposes only
                    </p>
                </div>
            </div>
        </section>
    );
}
