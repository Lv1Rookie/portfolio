import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, Code, Activity } from "lucide-react";

const Work: React.FC = () => {
    return (
        <section id="work" className="work">
            <Parallax speed={5}>
                <motion.h2
                    className="work-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Briefcase className="inline-icon" /> Work Experience
                </motion.h2>

                <motion.div
                    className="work-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h3 className="work-role">
                        Software Developer Intern | Future Fest
                        <span className="work-date"> May 2023 – Present</span>
                    </h3>

                    <ul className="work-list">
                        <li>
                            <ShieldCheck className="work-icon" />
                            <span>
                                Built a React wallet module ensuring secure wallet integration
                                and NFT transactions, enhancing user trust and platform usability
                            </span>
                        </li>
                        <li>
                            <Code className="work-icon" />
                            <span>
                                Leveraged TypeScript in design discussions and feature
                                development, reducing bugs by <span className="work-metric">30%</span>
                            </span>
                        </li>
                        <li>
                            <Activity className="work-icon" />
                            <span>
                                Integrated observability tools (Grafana, Prometheus, Loki, Tempo),
                                boosting system reliability and cutting troubleshooting time by{" "}
                                <span className="work-metric">35%</span>
                            </span>
                        </li>
                    </ul>

                </motion.div>
            </Parallax>
        </section>
    );
};

export default Work;
