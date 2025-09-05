import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion"; // for animations
import { Sparkles, Moon, Sun, Globe } from "lucide-react"; // cute icons

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <Parallax speed={5}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-title"
                >
                    <Sparkles className="inline-icon" /> About Me <Sparkles className="inline-icon" />
                </motion.h2>

                <motion.p
                    className="about-poem"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Debugging by moonlight <Moon className="poem-icon moon-icon" />, <br />
                    Animating by daylight <Sun className="poem-icon sun-icon" />. <br />
                    Never crashing a website— <br />
                    she is the one full-stack developer <Globe className="poem-icon globe-icon" />.
                </motion.p>

            </Parallax>
        </section>
    );
};

export default About;
