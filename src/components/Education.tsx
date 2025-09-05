import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, School } from "lucide-react";

const Education: React.FC = () => {
    return (
        <section id="education" className="education">
            <Parallax speed={5}>
                <motion.h2
                    className="work-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <GraduationCap className="inline-icon" /> Education
                </motion.h2>

                <motion.div
                    className="work-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <ul className="work-list">
                        <li>
                            <School className="work-icon" />
                            <span>
                                George Mason University — B.S. Computer Science
                                <span className="work-date"> (2024)</span>
                            </span>
                        </li>
                        <li>
                            <BookOpen className="work-icon" />
                            <span>
                                Northern Virginia Community College — A.S. Computer Science
                                <span className="work-date"> (2019)</span>
                            </span>
                        </li>
                        <li>
                            <Award className="work-icon" />
                            <span>
                                Art Institute of Washington, D.C. — B.S. Media Arts & Animation
                                <span className="work-date"> (2014)</span>
                            </span>
                        </li>
                    </ul>
                </motion.div>
            </Parallax>
        </section>
    );
};

export default Education;
