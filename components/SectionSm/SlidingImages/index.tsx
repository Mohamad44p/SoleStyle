import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import { SiAdidas, SiCockroachlabs, SiDior, SiNike, SiPuma, SiReebok, SiZara } from "react-icons/si";

const slider1 = [
  {
    color: "#e1dad6",
    icon: SiNike,
  },
  {
    color: "#d6d7dc",
    icon: SiAdidas,
  },
  {
    color: "#e3e3e3",
    icon: SiPuma,
  },
  {
    color: "#21242b",
    icon: SiReebok,
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    icon: SiZara,
  },
  {
    color: "#e5e0e1",
    icon: SiDior,
  },
  {
    color: "#d7d4cf",
    icon: SiCockroachlabs,
  },
  {
    color: "#e1dad6",
    icon: SiReebok,
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.iconContainer}>
                <project.icon size={100} color="#000" />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.iconContainer}>
                <project.icon size={100} color="#000" />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
